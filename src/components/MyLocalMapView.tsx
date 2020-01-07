import React, { useEffect, useRef, useContext, useState } from "react";
import { IMapProps, IStateMap } from '../interface/interface';
import { MapContext } from '../context/context';
import { activateToolsMeasurementLine, activateToolsMeasurementArea, deactivateToolsMeasurementLine, deactivateToolsMeasurementArea } from '../utils/toolbarActions';

const initialState: IStateMap = {
    view: null,
    lineMeasurement: null,
    areaMeasurement: null
}

const MyLocalMapView = (mapProps: IMapProps) => {
    const { data } = useContext(MapContext)
    const [state, setState] = useState(initialState)

    //create node
    const mapRef = useRef<HTMLInputElement>(null);

    //load map
    const lazyLoad = async () => {
        const app = await import("../data/map");
        const mapView = await app.initialize(mapRef.current as HTMLDivElement, mapProps.scale);
        setState({ ...state, view: mapView })
    }


    useEffect(() => { lazyLoad() }, []);
    useEffect(() => {
        console.log(data)
        data.line ? state.lineMeasurement = activateToolsMeasurementLine(state.view) : deactivateToolsMeasurementLine(state.lineMeasurement);
        data.area ? state.areaMeasurement = activateToolsMeasurementArea(state.view) : deactivateToolsMeasurementArea(state.areaMeasurement);
    }, [data.area, data.line]);

    return (
        <div className="mapview" ref={mapRef} />
    );
}

export { MyLocalMapView };
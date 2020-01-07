import React from "react";
import { MyMapView } from './MyMapView';
import { MyLocalMapView } from './MyLocalMapView';
import { IMapProps } from '../interface/interface';

let IMapProps: IMapProps;

const MyMaps = (mapsProps: IMapProps) => {
    return (
        <div className="mappingcontainer">
            <React.Fragment>
                <MyMapView scale={mapsProps.scale} />
                <MyLocalMapView scale={mapsProps.scale} />
            </React.Fragment>
        </div>
    );
}

export { MyMaps };
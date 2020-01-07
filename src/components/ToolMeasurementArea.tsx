import React, { useContext } from "react";
import { MapContext } from '../context/context';
import { actionTypes } from '../actions/actions';


const ToolMeasurementArea = () => {
    const context = useContext(MapContext);
    const manageAreaTool = () => {
        context.data.area ? context.Dispatch({ type: actionTypes.AREA_OFF }) : context.Dispatch({ type: actionTypes.AREA_ON });
    }
    return (
        <button className="esri-widget--button" onClick={(e) => manageAreaTool()}>
            <span aria-hidden="true" className="esri-icon-measure-area" />
        </button>
    );
}

export default ToolMeasurementArea;
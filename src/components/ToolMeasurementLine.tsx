import React, { useEffect, useRef, useContext } from "react";
import { MapContext } from '../context/context';
import { actionTypes } from '../actions/actions';

const ToolMeasurementLine = () => {
    const context = useContext(MapContext);
    const manageLineTool = () => {
        context.data.line ? context.Dispatch({ type: actionTypes.LINE_OFF }) : context.Dispatch({ type: actionTypes.LINE_ON });
    };

    return (
        <button className="esri-widget--button" onClick={(e) => manageLineTool()}>
            <span aria-hidden="true" className="esri-icon-measure-line" />
        </button>
    );
};

export default ToolMeasurementLine;
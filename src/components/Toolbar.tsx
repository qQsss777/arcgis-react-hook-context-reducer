import React from "react";
import ToolMeasurementLine from "./ToolMeasurementLine";
import ToolMeasurementArea from "./ToolMeasurementArea";

const Toolbar = () => {
    return (
        <div className="toolbar">
            <React.Fragment>
                <ToolMeasurementLine />
                <ToolMeasurementArea />
            </React.Fragment>
        </div>
    );
};

export default Toolbar;
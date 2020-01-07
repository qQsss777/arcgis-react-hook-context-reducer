import DistanceMeasurement2D = require('esri/widgets/DistanceMeasurement2D');
import MapView = require('esri/views/MapView');
import AreaMeasurement2D = require('esri/widgets/AreaMeasurement2D');

export const clearAndDestroy = (toolMeasurement: DistanceMeasurement2D | AreaMeasurement2D): void => {
    toolbar ? toolMeasurement.destroy() : null;
    toolMeasurement = null;
}

export const activateToolsMeasurementLine = (view: MapView): DistanceMeasurement2D => {
    const distanceMeasurement2D = new DistanceMeasurement2D({
        view: view
    });
    distanceMeasurement2D.viewModel.newMeasurement()
    return distanceMeasurement2D
}

export const deactivateToolsMeasurementLine = (distanceMeasurement2D: DistanceMeasurement2D, ): void => {
    distanceMeasurement2D ? clearAndDestroy(distanceMeasurement2D) : null;
}

export const activateToolsMeasurementArea = (view: MapView): AreaMeasurement2D => {
    const areaMeasurement2D = new AreaMeasurement2D({
        view: view
    });
    areaMeasurement2D.viewModel.newMeasurement()
    return areaMeasurement2D
}

export const deactivateToolsMeasurementArea = (areaMeasurement2D: AreaMeasurement2D): void => {
    areaMeasurement2D ? clearAndDestroy(areaMeasurement2D) : null;
}
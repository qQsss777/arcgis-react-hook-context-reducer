import MapView = require('esri/views/MapView');
import DistanceMeasurement2D = require('esri/widgets/DistanceMeasurement2D');
import AreaMeasurement2D = require('esri/widgets/AreaMeasurement2D');

export interface IMapProps {
    scale: number
}

export interface IData {
    line: boolean;
    area: boolean
};

export interface IState {
    data: IData;
    Dispatch: (value: any) => void;
};

export interface IAppProviderProps {
    children: JSX.Element[];
};

export interface IStateMap {
    view: MapView | null;
    lineMeasurement: DistanceMeasurement2D | null;
    areaMeasurement: AreaMeasurement2D | null;
}
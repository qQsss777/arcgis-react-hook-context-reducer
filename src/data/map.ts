import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

const noop = () => { };

//initialize mapview
export const initialize = (container: HTMLElement, scale: number): MapView => {
    const map: Map = new Map({
        basemap: 'streets-relief-vector',
    });

    const view: MapView = new MapView({
        map,
        scale,
        extent: {
            xmin: -513390.9110279666,
            xmax: -485606.0512463424,
            ymin: 6163367.119325026,
            ymax: 6180718.324745738,
            spatialReference: {
                wkid: 102100
            }
        },
        constraints: {
            rotationEnabled: false
        },
        ui: {
            components: ["zoom"]
        }
    });

    view.container = container as HTMLDivElement;
    view
        .when()
        .catch(noop);
    return view
};

import { useReducer, createContext } from "react";
import React from 'react';
import { IState, IAppProviderProps, IData } from '../interface/interface';
import { reducer } from '../reducer/reducer';

//create new context
export const MapContext = createContext<IState>(null);

//configure provider
export const MapContextProvider = ({ children }: IAppProviderProps) => {

    //initial state
    const initialState: IData = {
        line: false,
        area: false
    };

    //configure useReducer
    const [state, dispatch] = useReducer(reducer, initialState);
    return <MapContext.Provider value={{ data: state, Dispatch: dispatch }}>
        {children}
    </MapContext.Provider>
};



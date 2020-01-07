import { actionTypes } from '../actions/actions';
import { IData } from '../interface/interface';

export const reducer = (state: IData, action: any) => {
    switch (action.type) {
        case actionTypes.LINE_ON:
            return { ...state, line: true, area: false };
        case actionTypes.LINE_OFF:
            return { ...state, line: false, area: false };
        case actionTypes.AREA_ON:
            return { ...state, line: false, area: true };
        case actionTypes.AREA_OFF:
            return { ...state, line: false, area: false };
        default:
            throw new Error('Unexpected action');
    }
};
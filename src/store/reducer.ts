import { actionTypes } from './action';

export function reducers(state:any, action:any) {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.USER_DATA: {
            return {
                ...state,
                UserData: payload,
            };
        }
        default:
            throw new Error(`Unhandled action type: ${type}`);
    }

}
import { AUTHENTICATION_TYPE } from './reducer.types';
import lodash from 'lodash';

const initialState = {
    isAuthenticate: false,
    user: {}
}

export const Auth = (state=initialState, action) => {
    switch(action.type) {
        case "AUTHENTICATION_TYPE":
            return Object.assign({}, state, {
                isAuthenticate: !lodash.isEmpty(action.user),
                user: action.user
            })
        default:
            return state
    }
}

import { double } from "../actions/actionCreator"

export default class ConfigApi {

    static duplica(num) {
        console.log('view');
        return dispatch => {
            console.log('dispatch');
            dispatch(double(num));
            return num;
        }
    }
}
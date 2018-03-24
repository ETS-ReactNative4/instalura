import { double } from "../actions/actionCreator"

export default class ConfigApi {

    static duplica(num) {
        console.log('ConfigApi');
        return dispatch => {
            console.log('dispatch');
            dispatch(double(num));
            return num;
        }
    }
}
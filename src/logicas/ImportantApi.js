import { add } from "../actions/actionCreator"

export default class ImportantApi {

    static add(num) {
        return dispatch => {
            console.log(num)
            num += 1;
            dispatch(add(num));
            return num;
        }
    }
}
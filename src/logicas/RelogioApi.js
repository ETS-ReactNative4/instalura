import { aumentaUmSegundo } from "../actions/actionCreator"

export default class RelogioApi {

    static atualizaRelogio() {
        return dispatch => {
            dispatch(aumentaUmSegundo());
            // return num;
        }
    }
}
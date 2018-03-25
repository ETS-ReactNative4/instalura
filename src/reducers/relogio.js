//primeiro estado
const INITIAL_STATE = {
    dataAtual: new Date()
}
export function relogioReducer(state = INITIAL_STATE, action) {
    if (action.type === "INCREMENTA") {
        //imutavel
        return {
            dataAtual: new Date()
        }
    }
    return state;
}
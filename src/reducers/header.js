
const INITIAL_STATE = '';
export function notificacao(state = INITIAL_STATE, action) {
    if (action.type === "ALERT") {
        return action.msg
    }
    return state;
}
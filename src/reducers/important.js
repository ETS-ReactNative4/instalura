
const INITIAL_STATE = 0;
export function addImportant(state = INITIAL_STATE, action) {
    if (action.type === "ADD") {
        return action.num
    }
    return state;
}
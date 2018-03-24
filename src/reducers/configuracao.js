
const INITIAL_STATE = {
    size: 1,
    time: 2
};
export function configuracao_state(state = INITIAL_STATE, action) {
    if (action.type === "DOUBLE") {
        console.log('reducer')
        return {
            size: parseInt(action.dados.size, 0) * 2,
            time: parseInt(action.dados.time, 0) * 2
        };
    }
    return state;
}
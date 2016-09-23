const initalState = [];

export default (state = initalState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                action.payload.name
            ];
    }
    return state;
}

const initialState = {
    list: [],
    inputValue: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            const movieName = action.payload.name;

            return Object.assign({}, state, {
                list: state.list.concat(movieName),
                inputValue: ''
            });
        case 'SET_INPUT_VALUE':
            const inputValue = action.payload.value;

            return Object.assign({}, state, {
                inputValue
            });
        default:
            return state;
    }
}

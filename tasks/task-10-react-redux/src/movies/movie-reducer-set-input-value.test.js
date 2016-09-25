import test from 'ava';

import movieReducer from './movie-reducer';

function createSetInputValueAction(inputValue) {
    return {
        type: 'SET_INPUT_VALUE',
        payload: {
            value: inputValue
        }
    }
}

test('that the reducer is a function', t => {
    t.true(typeof movieReducer === 'function');
});

test('that empty state is returned when using unknown action', t => {
    const unknownAction = {};
    const currentState = undefined;
    const expectedState = {
        list: []
    };
    t.deepEqual(movieReducer(currentState, unknownAction), expectedState);
});

test('correct state updates for one SET_INPUT_VALUE action', t => {
    const action = createSetInputValueAction('My Input');
    const currentState = undefined;
    const expectedState = {
        inputValue: 'My Input'
    };

    t.deepEqual(movieReducer(currentState, action), expectedState);
});

test('correct state updates for multiple ADD_MOVIE actions', t => {
    const firstState = movieReducer(undefined, createSetInputValueAction('Star'));
    const secondState = movieReducer(firstState, createSetInputValueAction('Star Wars'));
    const expectedState = {
        inputValue: 'Star Wars'
    };

    t.deepEqual(secondState, expectedState);
});

test('immutable state', t => {
    const firstState = movieReducer(undefined, createAddMovieAction('Turtles 1'));
    const secondState = movieReducer(firstState, createAddMovieAction('Turtles 2'));

    t.false(firstState === secondState);
});

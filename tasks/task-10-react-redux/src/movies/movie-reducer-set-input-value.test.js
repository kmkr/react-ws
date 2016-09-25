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
        inputValue: '',
        list: []
    };
    const actualState = movieReducer(currentState, unknownAction);
    t.deepEqual(actualState, expectedState);
});

test('correct state updates for one SET_INPUT_VALUE action', t => {
    const action = createSetInputValueAction('My Input');
    const currentState = undefined;
    const expectedState = {
        inputValue: 'My Input',
        list: []
    };

    const actualState = movieReducer(currentState, action);
    t.deepEqual(actualState, expectedState);
});

test('correct state updates for multiple SET_INPUT_VALUE actions', t => {
    const firstState = movieReducer(undefined, createSetInputValueAction('Star'));
    const secondState = movieReducer(firstState, createSetInputValueAction('Star Wars'));
    const expectedState = {
        inputValue: 'Star Wars',
        list: []
    };

    t.deepEqual(secondState, expectedState);
});

test('immutable state', t => {
    const firstState = movieReducer(undefined, createSetInputValueAction('Turtle'));
    const secondState = movieReducer(firstState, createSetInputValueAction('Turtles'));

    t.false(firstState === secondState);
});

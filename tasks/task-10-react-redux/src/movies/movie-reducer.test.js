import test from 'ava';

import movieReducer from './movie-reducer';

function addMovie(movieName) {
    return {
        type: 'ADD_MOVIE',
        payload: {
            name: movieName
        }
    }
}

test('that empty state is returned when using unknown action', t => {
    const unknownAction = {};
    const currentState = undefined;
    const expectedState = [];
    t.deepEqual(movieReducer(currentState, unknownAction), expectedState);
});

test('correct state updates for one ADD_MOVIE action', t => {
    const action = addMovie('Blade Runner');
    const currentState = undefined;
    const expectedState = ['Blade Runner'];

    t.deepEqual(movieReducer(currentState, action), expectedState);
});

test('correct state updates for multiple ADD_MOVIE actions', t => {
    const firstState = movieReducer(undefined, addMovie('Turtles 1'));
    const secondState = movieReducer(firstState, addMovie('Turtles 2'));
    const expectedState = ['Turtles 1', 'Turtles 2'];

    t.deepEqual(secondState, expectedState);
});

test('immutable state', t => {
    const firstState = movieReducer(undefined, addMovie('Turtles 1'));
    const secondState = movieReducer(firstState, addMovie('Turtles 2'));

    t.false(firstState === secondState);
});

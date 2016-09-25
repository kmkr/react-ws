import test from 'ava';

import movieReducer from './movie-reducer';

function createAddMovieAction(movieName) {
    return {
        type: 'ADD_MOVIE',
        payload: {
            name: movieName
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

test('correct state updates for one ADD_MOVIE action', t => {
    const action = createAddMovieAction('Blade Runner');
    const currentState = undefined;
    const expectedState = {
        list: ['Blade Runner']
    };

    t.deepEqual(movieReducer(currentState, action), expectedState);
});

test('correct state updates for multiple ADD_MOVIE actions', t => {
    const firstState = movieReducer(undefined, createAddMovieAction('Turtles 1'));
    const secondState = movieReducer(firstState, createAddMovieAction('Turtles 2'));
    const expectedState = {
        list: ['Turtles 1', 'Turtles 2']
    };

    t.deepEqual(secondState, expectedState);
});

test('immutable state', t => {
    const firstState = movieReducer(undefined, createAddMovieAction('Turtles 1'));
    const secondState = movieReducer(firstState, createAddMovieAction('Turtles 2'));

    t.false(firstState === secondState);
    t.false(firstState.list === secondState.list);
});

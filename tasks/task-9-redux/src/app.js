import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxLogger from 'redux-logger';

import movieReducer from './movies/movie-reducer';
import Header from './header/header';
import MovieListContainer from './movies/movie-list-container';

const myStore = createStore(
    movieReducer,
    applyMiddleware(reduxLogger())
);

class MyApp extends Component {
    render() {
        return (
            <Provider store={myStore}>
                <div>
                    <Header yourName="Ditt navn"/>
                    <MovieListContainer/>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<MyApp/>, document.getElementById('my-app'));

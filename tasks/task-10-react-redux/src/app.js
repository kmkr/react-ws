import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxLogger from 'redux-logger';

import CountViewer from './count-viewer';

function myReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
}

const myStore = createStore(
    myReducer,
    applyMiddleware(reduxLogger())
);

class MyApp extends Component {
    increment() {
        myStore.dispatch({
            type: 'INCREMENT'
        });
    }
    render() {
        return (
            <Provider store={myStore}>
                <div>
                    <CountViewer/>
                    <button onClick={this.increment.bind(this)}>Inc</button>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<MyApp/>, document.getElementById('my-app'));

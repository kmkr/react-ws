import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
// todo: importer MovieList

class MyApp extends Component {
    render() {
        return (
            <div>
                <Header yourName="Ditt navn"/>
                // todo: render MovieList
            </div>
        )
    }
}

ReactDOM.render(<MyApp/>, document.getElementById('my-app'));

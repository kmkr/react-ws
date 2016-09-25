import React, {Component} from 'react';
import {connect} from 'react-redux';

import MovieList from './movie-list';

class MovieListContainer extends Component {
    handleInputChange(input) {
        // Oppgave 9c implementeres her
        // Bruk this.props.dispatch(...) til å dispatche en action

        // ...
    }

    handleAddMovie(movieName) {
        // Oppgave 9d implementeres her
        // Bruk this.props.dispatch(...) til å dispatche en action

        // ...
    }

    render() {
        // Oppgave 9f implementeres her ved å hente ut "movies" og "inputValue" fra props
        // Props er beriket med verdier fra mapStateToProps som du implementerte i forrige oppgave
        const movies = [];
        const inputValue = '';

        return (
            <MovieList
                onAddMovie={this.handleAddMovie.bind(this)}
                onInputChange={this.handleInputChange.bind(this)}
                movies={movies}
                inputValue={inputValue}/>
        );
    }
}

function mapStateToProps(state) {
    // Oppgave 9e implementeres her
    // Input er state fra reduceren
    // Output (return value) er et objekt som brukes til å berike this.props i MovieListContainer

    return {}
}

export default connect(mapStateToProps)(MovieListContainer);

import React, {Component} from 'react';
import {connect} from 'react-redux';

import MovieList from './movie-list';

class MovieListContainer extends Component {
    handleInputChange(inputValue) {
        const action = {
            type: 'SET_INPUT_VALUE',
            payload: {
                value: inputValue
            }
        };
        this.props.dispatch(action);
    }

    handleAddMovie() {
        const action = {
            type: 'ADD_MOVIE',
            payload: {
                name: this.props.inputValue
            }
        };
        this.props.dispatch(action);
    }

    render() {
        const movies = this.props.movies;
        const inputValue = this.props.inputValue;

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
    return {
        movies: state.list,
        inputValue: state.inputValue
    }
}

export default connect(mapStateToProps)(MovieListContainer);

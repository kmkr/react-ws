import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieListContainer extends Component {
    handleInputChange(e) {
        this.props.dispatch({
            type: 'SET_INPUT_VALUE',
            payload: {
                value: e.target.value
            }
        });
    }

    handleClick(e) {
        const movieName = this.props.movies.inputVale;
        this.props.dispatch({
            type: 'ADD_MOVIE',
            payload: {
                name: movieName
            }
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.movies.map(movie => (
                        <li key={movie}>{movie}</li>
                    ))}
                </ul>

                <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>
                    Legg til film
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movies: state
    };
}

export default connect(mapStateToProps)(MovieListContainer);

import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieList extends Component {
    constructor() {
        super();

        this.state = {
            inputValue: ''
        };
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }

    handleClick(e) {
        const movieName = this.state.inputValue;
        this.props.handleAddMovie(movieName);
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

export default connect(mapStateToProps)(MovieList);

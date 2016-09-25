import React, {Component, PropTypes} from 'react';

class MovieList extends Component {
    handleClick(e) {
        const movieName = this.state.inputValue;

        this.props.onAddMovie(movieName);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.movies.map(movie => (
                        <li key={movie}>{movie}</li>
                    ))}
                </ul>

                <input
                    value={this.props.inputValue}
                    onChange={this.props.onInputChange}/>

                <button onClick={this.handleClick.bind(this)}>
                    Legg til film
                </button>
            </div>
        );
    }
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired,
    inputValue: PropTypes.string.isRequired,
    onAddMovie: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired
};

export default MovieList;

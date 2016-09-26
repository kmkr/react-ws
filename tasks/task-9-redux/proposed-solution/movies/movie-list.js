import React, {Component, PropTypes} from 'react';

class MovieList extends Component {
    handleInputChange(e) {
        const inputValue = e.target.value;
        this.props.onInputChange(inputValue);
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
                    onChange={this.handleInputChange.bind(this)}/>

                <button disabled={this.props.inputValue === ''} onClick={this.props.onAddMovie}>
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

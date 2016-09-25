class Header extends React.Component {
    render() {
        return <h1>Hei {this.props.yourName}</h1>
    }
}

class MovieList extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            myFavoriteMovies: [
                'Blade Runner',
                'Kung Fury',
                'Song of the Sea'
            ]
        };
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
    handleClick() {
        const newMovieName = this.state.inputValue;
        this.setState({
            myFavoriteMovies: [
                ...this.state.myFavoriteMovies,
                newMovieName
            ]
        });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.myFavoriteMovies.map(function (favoriteMovie) {
                        return (
                            <li key={favoriteMovie}>
                                {favoriteMovie}
                            </li>
                        );
                    })}
                </ul>
                <input onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>Legg til film</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Header yourName="Kris-Mikael" />
        <MovieList/>
    </div>,
    document.getElementById('my-app')
);

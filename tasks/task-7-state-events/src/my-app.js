class Header extends React.Component {
    render() {
        return <h1>Hei {this.props.yourName}</h1>
    }
}

class MovieList extends React.Component {
    constructor() {
        super();
        // Oppgave 7a) sett opp initiell state med this.state = {...};
    }

    handleChange(event) {
        // Oppgave 7b) oppdater state med this.setState({...})
    }
    handleClick() {
        const newMovieName = this.state.inputValue;
        // Oppgave 7c) oppdater state med this.setState({...})
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
                <input
                    value={this.state.inputValue}
                    onChange={this.handleChange.bind(this)}/>

                <button onClick={this.handleClick.bind(this)}>
                    Legg til film
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Header yourName="Ditt navn" />
        <MovieList/>
    </div>,
    document.getElementById('my-app')
);

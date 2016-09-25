import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <h1>Hei {this.props.yourName}</h1>
        );
    }
}

export default Header;

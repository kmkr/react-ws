import React, {Component, PropTypes} from 'react';

class Header extends Component {
    render() {
        return <p>Hei {this.props.yourName}!</p>
    }
}

Header.propTypes = {
    yourName: PropTypes.string.isRequired
};

export default Header;

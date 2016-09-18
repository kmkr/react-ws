import React, {Component} from 'react';
import {connect} from 'react-redux';

class CountViewer extends Component {
    render() {
        return (
            <div>
                {this.props.count}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        count: state
    };
}

export default connect(mapStateToProps)(CountViewer);

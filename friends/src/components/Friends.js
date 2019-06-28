import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import { withRouter } from 'react-router-dom';

class Friends extends React.Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.friends.map((friend, index) => {
                        return (
                            <li key={index}>{friend.name}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        friends: state.friends
    }
}

export default withRouter(
    connect(
        mapStateToProps,
        { getData }
    )(Friends)    
)
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import Loader from '../../components/Loader/';
import { fetchProfile } from '../../redux/modules/profile';

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchProfile());
    }

    render() {
        if (this.props.loading) return <Loader />;
        return (
            <Profile
                usersData={this.props.usersData}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.profiles.loading,
        usersData: state.profiles.usersData
    };
}

export default connect(mapStateToProps)(ProfileContainer);

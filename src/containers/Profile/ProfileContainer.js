import React, { Component } from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import Loader from '../../components/Loader/';
import ItemCardList from '../../components/ItemCardList/';
import { fetchProfile } from '../../redux/modules/profile';
import { fetchItems } from '../../redux/modules/items';

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.dispatch(fetchProfile(this.props.match.params.id));
        this.props.dispatch(fetchItems(this.props.match.params.id));
    }

    render() {
        if (this.props.loading) return <Loader />;
        return (
            <div className="profile-page">
                <Profile
                    usersData={this.props.usersData}
                />
                <ItemCardList itemsData={this.props.itemsData} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.profiles.loading,
        usersData: state.profiles.usersData,
        itemsData: state.items.itemsData
    };
}

export default connect(mapStateToProps)(ProfileContainer);

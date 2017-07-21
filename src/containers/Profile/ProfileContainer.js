import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Profile from './Profile';
import Loader from '../../components/Loader/';
import ItemCardList from '../../components/ItemCardList/';
// import { fetchItems } from '../../redux/modules/items';

class ProfileContainer extends Component {

    render() {
        if (this.props.data.loading) return <Loader />;
        return (
            <div className="profile-page">
                <Profile
                    usersData={this.props.data.user}
                />
                <ItemCardList itemsData={this.props.data.user.items} />
            </div>
        );
    }
}

ProfileContainer.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool,
        user: PropTypes.object,
        items: PropTypes.object
    }).isRequired
};

function mapStateToProps(state) {
    return {
        loading: state.profiles.loading,
        usersData: state.profiles.usersData,
        itemsData: state.items.itemsData
    };
}

const profilePage = gql`
    query fetchProfile($id: ID!) {
        user(id: $id) {
            fullName
            bio
            id
            email
            items {
                id
                imageUrl
                itemOwner{
                    fullName
                    email
                    id
                }
                createdOn
                title
                tags
                description
            }
            borrowed {
                title
                id
                itemOwner {
                    fullName
                }
            }
        }
    }
`;

const UsersWithData = graphql(profilePage, {
    options: ownProps => ({
        variables: {
            id: ownProps.match.params.id
        }
    })
})(ProfileContainer);
export default connect(mapStateToProps)(UsersWithData);

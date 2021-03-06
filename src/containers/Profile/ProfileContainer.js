import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Profile from './Profile';
import Loader from '../../components/Loader/';
import ItemCardList from '../../components/ItemCardList/';

const ProfileContainer = ({ data }) => {
    if (data.loading) return <Loader />;
    return (
        <div className="profile-page">
            <Profile
                usersData={data.user}
            />
            <ItemCardList
                itemsData={data.user.items}
            />
        </div>
    );
};

ProfileContainer.propTypes = {
    data: PropTypes.shape({
        loading: PropTypes.bool,
        user: PropTypes.shape({
            bio: PropTypes.string,
            email: PropTypes.string,
            fullname: PropTypes.string,
            id: PropTypes.string,
            _typename: PropTypes.string,
            borrowed: PropTypes.arrayOf(PropTypes.shape({
                _typename: PropTypes.string,
                title: PropTypes.string,
                itemowner: PropTypes.shape({
                    _typename: PropTypes.string,
                    fullname: PropTypes.string,
                })
            })),
            items: PropTypes.arrayOf(PropTypes.shape({
                _typename: PropTypes.string,
                borrower: PropTypes.shape({
                    id: PropTypes.string,
                    fullname: PropTypes.string
                }),
                createdon: PropTypes.string,
                description: PropTypes.string,
                id: PropTypes.string,
                imageurl: PropTypes.string,
                itemowner: PropTypes.shape({
                    _typename: PropTypes.string,
                    email: PropTypes.string,
                    fullname: PropTypes.string,
                    id: PropTypes.string,
                }),
                tags: PropTypes.arrayOf(PropTypes.shape({
                    _typename: PropTypes.string,
                    title: PropTypes.string
                })),
                title: PropTypes.string
            }))
        }),
    }).isRequired,
};

const profilePage = gql`
query fetchProfile($id: ID!) {
    user(id: $id) {
      fullname
      bio
      id
      email
      items {
        id
        imageurl
        itemowner{
          fullname
          email
          id
          }
        createdon
        title
        tags {
            title
        }
        description
        borrower {
          id
          fullname
        }
      }
    borrowed {
      title
      itemowner {
          fullname
      }
    }
    }
  }
`;

function mapStateToProps(state) {
    return {
        loading: state.profiles.loading,
        location: state.router.location,
    };
}

const UsersWithData = graphql(profilePage, {
    options: ownProps => ({
        variables: {
            id: ownProps.match.params.id
        }
    })
})(ProfileContainer);

export default connect(mapStateToProps)(UsersWithData);

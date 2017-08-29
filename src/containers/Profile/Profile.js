import React from 'react';
import PropTypes from 'prop-types';

import ProfileCard from '../../components/ProfileCard/';
import './style.css';

const Profile = ({ usersData }) => (
    <ProfileCard usersData={usersData} />
);

Profile.propTypes = {
    usersData: PropTypes.shape({
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
    }).isRequired
};

export default Profile;

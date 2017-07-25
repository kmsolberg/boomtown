import React from 'react';
import PropTypes from 'prop-types';

import ProfileCard from '../../components/ProfileCard/';
import './style.css';

const Profile = ({ usersData }) => (
    <ProfileCard usersData={usersData} />
);

Profile.propTypes = {
    usersData: PropTypes.shape(PropTypes.object).isRequired
};

export default Profile;

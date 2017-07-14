import React from 'react';

import ProfileCard from '../../components/ProfileCard/';
import './style.css';

const Profile = ({ usersData }) => (
    <ProfileCard usersData={usersData} />
);

export default Profile;

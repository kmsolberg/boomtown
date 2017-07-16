import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import Avatar from 'material-ui/Avatar';

import './style.css';

const ProfileCard = ({ usersData }) => (
    <div>
        <Card
            className="profile-card"
        >
            <div className="profile-wrapper">
                <div className="profile-name">
                    <h2>{usersData.fullName}</h2>
                    <p>{usersData.bio}</p>
                </div>
                <div>
                    <p>10</p>
                    <p>Items Shared</p>
                    <p>20</p>
                    <p>Items Borrowed</p>
                </div>
                <Gravatar
                    className="profile-gravatar"
                    email={usersData.email}
                    size={175}
                />
            </div>
        </Card>
    </div>
);

export default ProfileCard;

import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Gravatar from 'react-gravatar';

import './style.css';

const ProfileCard = ({ usersData }) => (
    <div>
        <Card
            className="profile-card"
        >
            <CardHeader
                title={usersData.fullName}
                subtitle={usersData.bio}
                avatar={<Gravatar email={usersData.email} className="gravatar-img" />}
            />
            <CardText>
                3 items shared
                11 items borrowed
            </CardText>
        </Card>
    </div>
);

export default ProfileCard;

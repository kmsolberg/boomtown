import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Gravatar from 'react-gravatar';

import './style.css';

const ProfileCard = ({ usersData }) => (
    <Card
        className="profile-card"
    >
        <CardHeader
            title={usersData.fullName}
            subtitle="Subtitle"
            avatar={<Gravatar email="katsolberg@gamil.com" className="gravatar-img" />}
        />
        <CardText>
            3 items shared
            11 items borrowed
        </CardText>
    </Card>
);

export default ProfileCard;

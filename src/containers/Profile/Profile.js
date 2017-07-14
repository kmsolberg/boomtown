import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Gravatar from 'react-gravatar';

import './style.css';

const Profile = ({ }) => (
    <Card
        className="profile-card"
        users="me!"
    >
        <CardHeader
            title="My Name"
            subtitle="Subtitle"
            avatar={<Gravatar email="katsolberg@gamil.com" className="gravatar-img" />}
        />
        <CardText>
            3 items shared
            11 items borrowed
        </CardText>
    </Card>
);

export default Profile;

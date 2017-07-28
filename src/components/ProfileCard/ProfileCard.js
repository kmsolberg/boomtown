import React from 'react';
import { Card } from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import PropTypes from 'prop-types';

import './style.css';

const ProfileCard = ({ usersData }) => (
    <div>
        <Card
            className="profile-card"
        >
            <div className="profile-wrapper">
                <div className="profile-info">
                    <div className="profile-name">
                        <h2>{usersData.fullname}</h2>
                        <p>{usersData.bio}</p>
                    </div>
                    <div className="borrowing-info">
                        <h3>Currently Borrowing:</h3>
                        {usersData.borrowed.map((item) => (
                            <li key={item.id}>{item.title} from {item.itemowner.fullname}</li>
                        )
                        )}
                    </div>
                </div>
                <div>
                    <p id="black">{usersData.items.length}</p>
                    <p>Items Shared</p>
                    <p id="black">{usersData.borrowed.length}</p>
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

ProfileCard.propTypes = {
    usersData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ProfileCard;

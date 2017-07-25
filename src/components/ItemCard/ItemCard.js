import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

const moment = require('moment');

moment().format();

const ItemCard = ({ itemData }) => (

    <li className="itemCardWrapper">
        <Card>
            {!itemData.available ? (
                <CardMedia
                    overlay={<CardTitle subtitle="UNAVAILABLE" />}
                >
                    <img src={itemData.imageUrl} alt={itemData.title} />
                </CardMedia>
            ) : (
                <CardMedia>
                    <img src={itemData.imageUrl} alt={itemData.title} />
                </CardMedia>
            )}
            <Link to={`/profile/${itemData.itemOwner.id}`}>
                <CardHeader
                    title={itemData.itemOwner.fullName}
                    subtitle={(moment.unix(itemData.createdOn)).fromNow()}
                    avatar={<Gravatar email={itemData.itemOwner.email} className="gravatar-img" />}
                />
            </Link>

            <CardTitle
                title={itemData.title}
                subtitle={itemData.tags}
            />
            <CardText>
                {itemData.description}
            </CardText>
            itemData.available.length &&
            <div className="borrow-button">
                {itemData.available &&
                    <FlatButton
                        label="BORROW"
                        backgroundColor="rgb(38, 50, 56)"
                        hoverColor="grey"
                        className="borrow-btn"
                    />
                }
            </div>
        </Card>
    </li>
);

ItemCard.propTypes = {
    itemData: PropTypes.shape({
        items: PropTypes.object
    }).isRequired
};

export default ItemCard;

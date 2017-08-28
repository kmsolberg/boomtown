import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

const moment = require('moment');

moment().format();

const ItemCard = ({ itemData, authenticated }) => (

    <li className="itemCardWrapper">
        <Card>
            {itemData.borrower === null ? (
                <CardMedia>
                    <img src={itemData.imageurl} alt={itemData.title} />
                </CardMedia>
            ) : (
                <CardMedia
                    overlay={<CardTitle subtitle="UNAVAILABLE" />}
                >
                    <img src={itemData.imageurl} alt={itemData.title} />
                </CardMedia>
            )}
            <Link to={`/profile/${itemData.itemowner.id}`}>
                <CardHeader
                    title={itemData.itemowner.fullname}
                    subtitle={(moment(itemData.createdon, 'YYYYMMDD')).fromNow()}
                    avatar={<Gravatar email={itemData.itemowner.email} className="gravatar-img" />}
                />
            </Link>

            <CardTitle
                title={itemData.title}
                subtitle={(itemData.tags.map(tag => tag.title).join(', '))}
            />
            <CardText>
                {itemData.description}
            </CardText>
            {!itemData.borrower && itemData.itemowner.id !== authenticated &&
                <div className="borrow-button">
                    {!itemData.borrower &&
                        <FlatButton
                            label="BORROW"
                            backgroundColor="rgb(38, 50, 56)"
                            hoverColor="grey"
                            className="borrow-btn"
                        />
                    }
                </div>
            }
        </Card>
    </li>
);

ItemCard.propTypes = {
    itemData: PropTypes.shape({
        title: PropTypes.string,
        available: PropTypes.bool,
        imageurl: PropTypes.string,
        itemowner: PropTypes.shape({
            fullname: PropTypes.string,
            email: PropTypes.string
        }),
        createdon: PropTypes.string,
        tags: PropTypes.array
    }).isRequired
};

export default ItemCard;

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
            {!itemData.borrower ? (
                <CardMedia>
                    <img src={itemData.imageurl} alt={itemData.title} />
                </CardMedia>
            ) : (
                <CardMedia
                    overlay={<CardTitle subtitle={`Borrowed by ${itemData.borrower.fullname}`} />}
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
        _typename: PropTypes.string,
        borrower: PropTypes.shape({
            _typename: PropTypes.string,
            fullname: PropTypes.string,
            id: PropTypes.string
        }),
        createdon: PropTypes.string,
        description: PropTypes.string,
        id: PropTypes.string,
        imageurl: PropTypes.string,
        itemowner: PropTypes.shape({
            _typename: PropTypes.string,
            email: PropTypes.string,
            fullname: PropTypes.string,
            id: PropTypes.string,
        }),
        tags: PropTypes.arrayOf(PropTypes.shape({
            _typename: PropTypes.string,
            title: PropTypes.string
        })),
        title: PropTypes.string
    }).isRequired,
    authenticated: PropTypes.string.isRequired,
};

export default ItemCard;

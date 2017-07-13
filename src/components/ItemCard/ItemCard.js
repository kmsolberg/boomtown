import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';

import './style.css';

const moment = require('moment');
moment().format();

const ItemCard = ({ itemData }) => (
    <li className="itemCardWrapper">
        <Card>
            <CardMedia>
                <img src={itemData.imageUrl} alt="" />
            </CardMedia>
            <CardHeader
                title={itemData.itemOwner.fullName}
                subtitle={(moment.unix(itemData.createdOn)).fromNow()}
                avatar={<Gravatar email={itemData.itemOwner.email} className="gravatar-img" />}
            />

            <CardTitle
                title={itemData.title}
                subtitle={itemData.tags}
            />
            <CardText>
                {itemData.description}
            </CardText>
            <FlatButton
                label="BORROW"
                backgroundColor="black"
                hoverColor="grey"
                className="borrow-button"
            />
        </Card>
    </li>
);

export default ItemCard;

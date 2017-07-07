import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
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
                subtitle={moment().startOf('hour').fromNow()}
                avatar={<Gravatar email={itemData.itemOwner.email} className="gravatar-img" />}
            />

            <CardTitle title={itemData.title} />
            <CardText>
                {itemData.description}
            </CardText>
        </Card>
    </li>
);

export default ItemCard;

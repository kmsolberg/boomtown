import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Gravatar from 'react-gravatar'

const ItemCard = ({ itemData }) => (
    <li className="itemCardWrapper">
        <Card>
            <CardMedia>
                <img src={itemData.imageUrl} alt="" />
            </CardMedia>
            <CardHeader
                title={itemData.itemOwner.fullName}
                subtitle="Subtitle"
                avatar={<Gravatar email={itemData.itemOwner.email} />}
            />

            <CardTitle title={itemData.title} subtitle="Card subtitle" />
            <CardText>
                {itemData.description}
            </CardText>
        </Card>
    </li>
);

export default ItemCard;

import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const ItemCard = ({ itemData }) => (
    <li className="itemCardWrapper">
        <Card>
            <CardHeader
                title={itemData.title}
                subtitle="Subtitle"
                avatar="images/jsa-128.jpg"
            />
            <CardMedia>
                <img src={itemData.imageUrl} alt="" />
            </CardMedia>
            <CardTitle title={itemData.title} subtitle="Card subtitle" />
            <CardText>
                {itemData.description}
            </CardText>
        </Card>
    </li>
);

export default ItemCard;

import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

const ItemCard = ({ itemData }) => (
    <Card>
        <CardHeader
            title={itemData.title}
            subtitle="Subtitle"
            avatar="images/jsa-128.jpg"
        />
        <CardMedia
            overlay={<CardTitle title="{Overlay title}" subtitle="Overlay subtitle" />}
        >
            <img src="images/nature-600-337.jpg" alt="" />
        </CardMedia>
        <CardTitle title={itemData.title} subtitle="Card subtitle" />
        <CardText>
            {itemData.description}
        </CardText>
    </Card>
);

export default ItemCard;

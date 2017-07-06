import React, { Component } from 'react';
import Items from './Items';

class ItemsContainer extends Component {

    constructor () {
        super();
        this.state = {
            loading: true,
            itemsData: []
        };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <Items />
        );
    }
}

export default ItemsContainer;

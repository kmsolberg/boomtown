import React, { Component } from 'react';
import Loader from '../../components/Loader/';
import Items from './Items';

class ItemsContainer extends Component {

    constructor() {
        super();
        this.state = {
            loading: true,
            itemsData: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/items')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    itemsData: data,
                    loading: false
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        if (this.state.loading) return <Loader />;
        return (
            <div>
                <Items
                    itemsData={this.state.itemsData}
                />
            </div>
        );
    }
}

export default ItemsContainer;

import React, { Component } from 'react';
import { Query } from 'react-apollo';
import qql from 'graphql-tag';
import styled from 'styled-components';

import Item from './Item';

const ALL_ITEMS_QUERY = qql`
    query ALL_ITEMS_QUERY {
        items {
            id
            title
            description
            image
            largeImage
        }
    }
`;

const Center = styled.div`
    text-align: center;
`;

const ItemList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 60px;
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
`;

class Items extends Component {
    render() {
        return (
            <div>
                <p>Items!</p>  
                <Query query={ALL_ITEMS_QUERY}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>
                        if (error) return <p>Error: {error.message}</p>
                        return (
                            <ItemList>
                                {data.items.map(item => 
                                    <Item item={item} key={item.id} />
                                )}
                            </ItemList>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

export default Items;

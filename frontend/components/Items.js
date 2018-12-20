import React, { Component } from 'react';
import { Query } from 'react-apollo';
import qql from 'graphql-tag';

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

class Items extends Component {
    render() {
        return (
            <div>
                <p>Items!</p>  
                <Query query={ALL_ITEMS_QUERY}>
                    {payload => {
                        console.log(payload);
                        return <p>Child of query</p>
                    }}
                </Query>
            </div>
        )
    }
}

export default Items;

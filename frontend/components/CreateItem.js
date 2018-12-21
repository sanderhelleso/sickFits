import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';

import formatMoney from '../lib/formatMoney';
import ErrorMessage from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
    mutation CREATE_ITEM_MUTATION(
        $title: String!
        $description: String!
        $price: Int!
        $image: String
        $largeImage: String
    ) {
        createItem(
            title: $title
            description: $description
            price: $price
            image: $image
            largeImage: $largeImage
        ) {
            id
        }
    }
`;

class CreateItem extends Component {
    state = {
        title: 'A Kewl Title',
        description: 'SQUAWK',
        image: 'dog.jpg',
        largeImage: 'largedog.jpg',
        price: 1000
    }

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val });
    }

    render() {
        return (
            <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
                {(createItem, { loading, error }) => (
                    <Form 
                        onSubmit={async e => {

                            // stop form from submitting
                            e.preventDefault();

                            // call mutation
                            const res = await createItem();

                            // route change to single item page
                            Router.push({
                                pathname: '/item',
                                query: { id: res.data.createItem.id }
                            })
                        }}
                    >
                        <ErrorMessage error={error} /> 
                        <fieldset disabled={loading} aria-busy={loading}>
                            <label htmlFor="title">
                                Title
                                <input 
                                    type="text" 
                                    id="title" 
                                    name="title" 
                                    placeholder="Title" 
                                    required 
                                    value = {this.state.title} 
                                    onChange={this.handleChange}
                                />
                            </label>

                            <label htmlFor="price">
                                Price
                                <input 
                                    type="number" 
                                    id="price" 
                                    name="price" 
                                    placeholder="Price" 
                                    required 
                                    value = {this.state.price} 
                                    onChange={this.handleChange}
                                />
                            </label>

                            <label htmlFor="description">
                                Price
                                <textarea 
                                    id="description" 
                                    name="description" 
                                    placeholder="Enter A Description" 
                                    required 
                                    value = {this.state.description} 
                                    onChange={this.handleChange}
                                />
                            </label>
                            <button type="submit">Submit</button>
                        </fieldset>
                    </Form>
                )}
            </Mutation>
        )
    }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };

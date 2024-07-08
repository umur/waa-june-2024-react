import React from 'react';
import reviews from '../data/reviews.json';
import users from '../data/users.json';
import products from '../data/products.json';

const ReviewList = () => {
    const userMap = {};
    const productMap = {};
    users.forEach(user => {
        userMap[user.id] = user;
    });
    products.forEach(product => {
        productMap[product.id] = product;
    });
    return (
        <div>
            <h2>Reviews</h2>
            <ul>
                {reviews.map(review => {
                    const user = userMap[review.userId];
                    const product = productMap[review.productId];
                    return (
                        <li key={review.id}>
                            {review.comment} - User: {user ? `${user.firstName} ${user.lastName}` : 'Unknown'} - Product: {product ? product.name : 'Unknown'}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ReviewList;

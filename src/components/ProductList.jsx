import React from 'react';
import products from '../data/products.json';
import categories from '../data/categories.json';

const ProductList = () => {
    const categoriesMap = {};
    categories.forEach(category => {
        categoriesMap[category.id] = category;
    });
    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => {
                    const category = categoriesMap[product.categoryId];
                    return (
                        <li key={product.id}>
                            {product.name} - ${product.price} - {product.rating} stars - Category: {category ? category.name : 'Unknown'}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProductList;

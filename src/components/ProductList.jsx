import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const response = await axios.get('/products');
            console.log(response.data);
            setProducts(response.data);
        } catch (error) {
            console.error('getProducts: ', error);
        }
    };

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => {
                    return (
                        <li key={product.id}>
                            {product.name} - ${product.price} - {product.rating} stars - Category: {product.category.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default ProductList;

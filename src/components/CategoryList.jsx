import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try {
            const response = await axios('/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('getCategories: ', error);
        }
    };

    return (
        <div>
            <h2>Categories</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;

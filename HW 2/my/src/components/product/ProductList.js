import React from 'react';
import ProductItem from "./ProductItem";
import classes from './productList.module.css'


function ProductList({addToBasket}) {
    const products = [
        {
            id: 1,
            name: "Яблочко"
        },
        {
            id: 2,
            name: "Груша"
        },
        {
            id: 3,
            name: "Банананас"
        },
        {
            id: 4,
            name: "Апельсин"
        },
        {
            id: 5,
            name: "Мандарин"
        }
    ]
    return (
        <div className={classes.list}>
            <h1>Мой список!</h1>
            {products.map(product => <ProductItem
                    item={product}
                    key={product.id}
                    addToBasket={addToBasket}
                />
            )}
        </div>
    );
}

export default ProductList;
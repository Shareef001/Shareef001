import BasketItem from "../basket/BasketItem";
import About from "../about/About";
import ProductList from "../product/ProductList";
import {useState} from "react";


function BasketList() {
    const [basket, setBasket] = useState([])

    const addToBasket = (product, newCount = 0) => { // Яблочко
        const res = basket.find((element) => {
            return element.id === product.id
        })
        if (!res) {
            product.counter = 1
            setBasket([...basket, product]) // [Яблочко 1, Груша 1]
        } else {
            const newBasket = basket.map((item) => {
                if (item.id === res.id) {
                    if (newCount) {
                        item.counter = newCount
                    } else {
                        item.counter += 1
                    }
                    return item
                }
                return item
            })

            setBasket(newBasket)

        }
    }

    return (

        <div className='App'>
            <ProductList addToBasket={addToBasket}/>
            <h2>Корзина</h2>
            <div>{basket.map((product, index) => <BasketItem item={product} key={index}
                                                             addToBasket={addToBasket}/>)}</div>


        </div>
    );
}

export default BasketList;
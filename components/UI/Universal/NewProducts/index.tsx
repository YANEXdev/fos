import {useEffect, useState} from "react";
import {Api} from "../../../../api/base"
import Product_component from "../../base/Product";


export default function NewProducts_component() {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const {data} = await Api().Instance.get('https://dummyjson.com/products?limit=10')
            setProducts(data.products)
        } catch (err) {

        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            {products?.map((obj:any, index) => {
                return (
                    <Product_component key={index} />
                )
            })}
        </>
    )
}
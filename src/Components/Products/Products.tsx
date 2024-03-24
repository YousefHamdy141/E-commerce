import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { CurrencyFormatter } from '../CurrencyFormatter'
import { Loader } from '../Loader'
import './Products.scss'

const API_URL = 'https://dummyjson.com/products'

export type Product = {
    id: number
    title: string
    price: number
    thumbnail: string
    image: string
    quantity: number
}

export interface CartProps {
    [productId: string]: Product
}

export const Products = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState<Product[]>([])
    const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})

    const navigate = useNavigate()
    const navigateToCart = () => {
        navigate('/details')
    }
    useEffect(() => {
        fetchData(API_URL)
    }, [])


    async function fetchData(url: string) {
        try {
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                setProducts(data.products)
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
        }
    }

    const addToCart = (product: Product): void => {
        product.quantity = 1

        setCart((prevCart) => ({
            ...prevCart,
            [product.id]: product,
        }))
    }

    const isInCart = (productId: number): boolean => Object.keys(cart || {}).includes(productId.toString())

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className="productPage">
            <h1>Products</h1>

            <div className="container">
                {products.map(product => (
                    <div className="product" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} onClick={navigateToCart} />
                        <h3>{product.title}</h3>
                        <p>Price: <CurrencyFormatter amount={product.price} /></p>
                        <button disabled={isInCart(product.id)} onClick={() => addToCart(product)}>Send to Cart</button>
                    </div>
                ))}
            </div>
        </section>
    )
}



// <div className='contain'>
//     <div className='face'>
//         <div className='conteent'>
//             <h3>
//                 <a href='#' target="_blank"> Cart </a>
//             </h3>
//             <p> This is a goood product </p>
//         </div>
//     </div>
// </div>
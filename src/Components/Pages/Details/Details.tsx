import { Link, useSearchParams } from 'react-router-dom'
import './Details.scss'
import { useEffect, useState } from 'react'
import { Product } from '../../Products/Products'
import { ArrowLeft } from 'lucide-react';


export const Details = () => {
    const API_URL = 'https://dummyjson.com/products'

    const [searchParams] = useSearchParams();

    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        const id = searchParams.get('productId') || '';
        fetchData(API_URL, id)
    }, [searchParams])

    async function fetchData(url: string, id: string) {
        try {
            const response = await fetch(url + `/${id}`)
            if (response.ok) {
                const data = await response.json();
                setProduct(() => {
                    return { ...data }
                })
            } else { /* empty */ }
        } catch (error) { /* empty */ }
    }

    return (
        <section className="Details-Page">

            <h1 className='d-flex'> <Link className='arrow-back' to={"/"}>  <ArrowLeft /> </Link>  {product?.title} </h1>

            <div className='details-Container'>
                <div className="details-product">
                    <img src={product?.thumbnail} alt="iPhone 9" />
                    <h3>{product?.title}</h3>
                    <p> price: {product?.price} £ </p>
                    <p className='p'>Information : <br /> {product?.description} </p>
                </div>
            </div>
        </section>
    )
}


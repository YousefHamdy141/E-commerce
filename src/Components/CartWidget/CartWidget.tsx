import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import shoppingCart from '../../assets/shopping-cart.svg'
import './CartWidget.scss'

interface Props {
    productsCount: number
}

export const CartWidget: FunctionComponent<Props> = ({ productsCount }) => {
    const navigate = useNavigate()

    const navigateToCart = () => {
        navigate('/cart')
    }

    return (
        <button className="container-CartWidget" onClick={navigateToCart}>
            <span className="productsCount">{productsCount}</span>
            <img src={shoppingCart} className="shoppingCart" alt="Go to Cart" />
        </button>
    )
}

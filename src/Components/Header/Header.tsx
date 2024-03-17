import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'
import { CartWidget } from '../CartWidget'
import './header.scss'

export const Header = () => {

    const productsCount: number = length

    return (
        <header className="header">
            <div>
                <Link to="/">
                    <img src={logo} className="logo" alt="Shopping Cart Application" />
                </Link>
            </div>
            <div>
                <CartWidget productsCount={productsCount} />
            </div>
        </header>
    )
}

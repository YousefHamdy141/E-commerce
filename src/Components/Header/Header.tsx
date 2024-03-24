import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { CartWidget } from '../CartWidget'
import './header.scss'

export const Header = () => {
    const productsCount: number = length

    const scrollToFooter = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
        });
    };

    return (
        <header className="header-container">
            <nav>
                <div className='E-commerce-Logo'>
                    <Link to="/">
                        <img src={logo} className="logo" alt="E-commerce Logo" />
                    </Link>
                    <h4>
                        E-Commerce App
                    </h4>
                </div>
                <ul>
                    <Link to="/">
                        <li className='nn'><a> Products </a></li>
                    </Link>
                    <Link to="/src/Components/AboutPage/About.tsx">
                        <li><a> About us </a></li>
                    </Link>
                </ul>
                <div>
                    <CartWidget productsCount={productsCount} />
                </div>
            </nav>

            <div className='header-text'>
                <p className='text'>All the products you need</p>
                <a onClick={scrollToFooter}>
                    <button className='button'>Let's Talk</button>
                </a>
            </div>

        </header>
    )
}

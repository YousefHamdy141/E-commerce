import logo from '../../assets/Egypt.png'
import location from '../../assets/location.png'
import logo2 from '../../assets/Palestin.jpg'
import mobile from '../../assets/mobile.png'
import FooterForm from './FooterForm/FooterForm'
import './Footer.scss'

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className='contactUs-container'>
                <div className='contactUs-text'>
                    <p className='TalkUs-header'>Let's Talk</p>
                    <p className='TalkUs-content'>Reach out to us today in the way that's most convenient for you. We're excited to hear from you and help you take your business to the next level!</p>
                    <div className='two-address'>
                        <div className='contactUs-address'>
                            <div className='left-side'>
                                <img className='left-side-logo' src={logo} alt='Egypt-Logo' />
                                <p>Egypt</p>
                            </div>
                            <div className='left-side-location'>
                                <img className='left-side-logo' src={location} alt='Egypt-Logo' />
                                <p>Road 15, Benha City, 5th Floor.</p>
                            </div>
                            <div className='left-side-mobile'>
                                <img className='left-side-logo' src={mobile} alt='Mobile-Logo' />
                                <p>00000000000</p>
                            </div>
                        </div>
                        <div className='contactUs-address'>
                            <div className='right-side'>
                                <img className='right-side-logo' src={logo2} alt='Egypt-Logo' />
                                <p>Palestin</p>
                            </div>
                            <div className='right-side-location'>
                                <img className='right-side-logo' src={location} alt='Egypt-Logo' />
                                <p>Road 15, Benha City, 5th Floor.</p>
                            </div>
                            <div className='right-side-mobile'>
                                <img className='right-side-logo' src={mobile} alt='Mobile-Logo' />
                                <p>00000000000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterForm />
            </div>
        </footer>
    )
}


import { NavLink } from "react-router-dom"
import './header.css'
import logo from "../../assets/images/logo.png"
function Header() {
    return (
        <header className="header">
            <div className="header-top">
                Due to the COVID 19 epidemic, orders may be processed with a slight delay
            </div>
            <div className="container">
                <div className="inner-wrapper">
                    <div className="inner-logo">
                        <img src={logo} alt="" />
                        <span>CureM4</span>
                    </div>
                    <div className="inner-menu">
                        <ul>
                            <li><NavLink to="/" className={({isActive}) => isActive ? 'nav-active' : ''}>Trang chủ</NavLink></li>
                            <li><NavLink to="/vehicles" className={({isActive}) => isActive ? 'nav-active' : ''}>Phương tiện</NavLink></li>
                            <li><NavLink>Chuyến đi</NavLink></li>
                            <li><NavLink>Về chúng tôi</NavLink></li>
                            <li><NavLink>Liên hệ</NavLink></li>
                        </ul>
                    </div>
                    <div className="inner-contact">
                        Need help? 989-879-0847
                    </div>
                    <div className="inner-social">
                        <ul>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
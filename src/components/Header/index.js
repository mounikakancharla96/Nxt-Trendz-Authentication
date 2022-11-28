import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="small-device-container">
      <div className="small-device-header">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="small-device-image"
        />
        <button type="button" className="small-device-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="small-device-logout"
          />
        </button>
      </div>
      <div className="nav-links">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-images"
          />
        </Link>
        <Link to="/products">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-images"
          />
        </Link>
        <Link to="/cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-images"
          />
        </Link>
      </div>
    </div>
    <div className="large-device-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="large-device-logo"
      />
      <ul className="large-nav-items">
        <li>
          <Link to="/" className="large-nav-links">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="large-nav-links">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="large-nav-links">
            Cart
          </Link>
        </li>
        <button type="button" className="logout-button">
          Logout
        </button>
      </ul>
    </div>
  </nav>
)

export default Header

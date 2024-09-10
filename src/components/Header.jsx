import {useSelector} from "react-redux";

const Header = () => {
    const cartSize = useSelector(state => state.cart.length);
    return (
        <div className="header">
            <h1>Redux Exercise</h1>
            <div className="header-cart-summary">You have {cartSize} items in your cart</div>
        </div>
    );
}

export default Header;
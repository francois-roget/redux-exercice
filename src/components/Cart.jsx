import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../actions.js";

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.title} - ${item.price}
                        <button onClick={() => dispatch(removeItem(item))}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
import './App.css'
import Header from "./components/Header.jsx";
import Catalog from "./components/Catalog.jsx";
import Cart from "./components/Cart.jsx";
import store from "./store";
import {Provider} from "react-redux";

function App() {

    return (
        <Provider store={store}>
        <div className="App">
            <Header />
            <div className="container">
                <div className="catalog"><Catalog /></div>
                <div className="cart"><Cart /></div>
            </div>
        </div>
        </Provider>
    )
}

export default App

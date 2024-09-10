import './CatalogLine.css';
import {useDispatch} from "react-redux";
import {addItem} from "../actions.js";

const CatalogLine = ({product}) => {
    const dispatch = useDispatch();
    return (
        <div className="catalog-line">
            <div className="catalog-line-image">
                <img src={product.imageUrl} alt={product.title}/>
            </div>
            <div className="catalog-line-info">
                <h1 className="catalog-line-title">{product.title}</h1>
                <p className="catalog-line-description">{product.description}</p>
            </div>
            <div className="catalog-line-price">
                <button onClick={() => dispatch(addItem(product))} className="catalog-line-button">
                    ${product.price}</button>
            </div>
        </div>
    );
};

export default CatalogLine;
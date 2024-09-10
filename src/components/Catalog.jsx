import CatalogLine from "./CatalogLine.jsx";


const Catalog = () => {
    // TODO: Get products from Redux
    const products = [
        {
            title: 'iPhone X',
            description: 'The latest smartphone from Apple.',
            price: 999,
            imageUrl: 'https://placehold.co/100'
        },
        {
            title: 'MacBook Pro',
            description: 'The best laptop ever made.',
            price: 1499,
            imageUrl: 'https://placehold.co/100'
        },
        {
            title: 'Apple Watch',
            description: 'The timepiece of choice for fitness enthusiasts.',
            price: 399,
            imageUrl: 'https://placehold.co/100'
        }
    ];
    return (
        <div>
            <h2>Catalog</h2>
            <ul>
                {products.map(product => (<CatalogLine key={product.title} product={product} />))}
            </ul>
        </div>
    );
};

export default Catalog;
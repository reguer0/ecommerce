import './styles/Products.css';
export function Products ({ products }) {
    return (
        <div className="products">
            {products.slice(0,10).map((product) => (
                <div className="product" key={product.id}>
                    <img src={product.images} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
}
import {React} from 'react';
import {useParams} from 'react-router-dom';

function ProductInfo ({database}) {
    const {id} = useParams();
    const product = database.find(p => p.id == parseInt(id, 10));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image}></img>
            <p>Product information:</p>
            <p>{product.price}</p>
            <p>{product.color}</p>
            <p>{product.type}</p>
        </div>
    );

}

export default ProductInfo;

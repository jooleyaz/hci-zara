import {React} from 'react';
import {useParams, Link} from 'react-router-dom';
import './ProductInfo.css';

function ProductInfo ({database}) {
    const {id} = useParams();
    const product = database.find(p => p.id == parseInt(id, 10));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className='page'>

            <div className='navbar'>
                <Link to={"/"}>
                    <svg aria-label="ZARA logo Canada. Go to homepage" class="layout-catalog-logo-icon" viewBox="0 0 132 55" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"></path></svg>
                </Link>
            </div>

            <div className='screen'>
                <div className='panel1'>
                    <div className='details'>
                        <h5>COMPOSITION</h5>
                        <p>We work with monitoring programs to guarantee compliance with the social, environmental, and health and safety standards of our products. To assess its compliance, we have developed an audit program and plans for continual improvement.</p>
                        <h5>OUTER SHELL</h5>
                        <ul>
                            <li>91% cotton (20% RCS-certified recycled cotton)</li>
                            <li>7% polyester (7% RCS-certified recycled polyester)</li>
                            <li>2% elastane (71% OCS certified organically grown cotton)</li>
                        </ul>
                        <h5>CERTIFIED MATERIALS</h5>
                        <p>RCS CERTIFIED RECYCLED COTTON<br/>This fiber is made from recycled cotton textile waste. Using recycled materials helps limit the consumption of raw materials. It is certified to the Recycled Claim Standard (RCS), which verifies the recycled content and tracks it from source to final product.<br/>Certified by Intertek 193341</p>
                        <p>RCS CERTIFIED RECYCLED POLYESTER<br/>Nowadays, recycled polyester is mainly made from PET plastic waste. This is a type of plastic that is widely used in a variety of items, such as plastic bottles. Using recycled materials helps limit the production of virgin polyester fiber. It is certified to the Recycled Claim Standard (RCS), which verifies the recycled content and tracks it from source to final product.<br/>Certified by Intertek 193341</p>
                        <p>OCS CERTIFIED ORGANICALLY GROWN COTTON<br/>This fiber is produced without using artificial fertilizers or pesticides and is grown from seeds that have not been genetically modified. We are currently working with the Organic Content Standard (OCS) that supervises the process from the source to the end product.<br/>Certified by Intertek 193341</p>
                        <h5>CARE</h5>
                        <p>Caring for your clothes is caring for the environment.<br/>Lower temperature washes and delicate spin cycles are gentler on garment, helping to maintain the color, shape and structure of the fabric. At the same time it reduces energy consumption that is used in care processes. </p>
                        <h5>Clothing care guide</h5>
                        <ul>
                            <li>Machine wash max. 40ºC/104ºF delicate cycle</li>
                            <li>Do not use bleach / whitener</li>
                            <li>Iron maximum 110ºC/230ºF</li>
                            <li>Tetrachloroethylene Dry Clean</li>
                            <li>Low temperature dryer may be used</li>
                            <li>Wash inside out</li>
                            <li>Wash separately</li>
                            <li>Iron inside out</li>
                        </ul>
                        <h5>ORIGIN</h5>
                        <p>We work with our suppliers, workers, unions, and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Objectives of Sustainable Development. </p>
                        <p>Thanks to the collaboration with our suppliers, we are working to understand the facilities and processes that are used to manufacture our products with the goal of understanding their traceability.</p>
                        <p>Made in Tunisia</p>
                    </div>
                </div>
                <div className='panel2'>
                    <img src={product.image}></img>
                </div>
                <div className='panel3'>
                    <div className='item-info'>
                        <h1>{product.title}</h1>
                        <p>Product information:</p>
                        <p>{product.price}</p>
                        <p>{product.color}</p>
                        <p>{product.type}</p>
                        <p>{product.size}</p>
                        <p>Fake description here: Jeans with a high waist with belt loops. Five pockets. Front zip and button closure.</p> 
                    </div>
                </div>
            </div>

        </div>
    );

}

export default ProductInfo;

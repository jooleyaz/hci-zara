import React from 'react';

const Composition = ({isTrue}) => {

    if (isTrue == true) {
        return (
            <div>
                <p>We work with monitoring programs to guarantee compliance with the social, environmental, and health and safety standards of our products. To assess its compliance, we have developed an audit program and plans for continual improvement.</p>
                    <h3>OUTER SHELL</h3>
                    <ul>
                        <li>91% cotton (20% RCS-certified recycled cotton)</li>
                        <li>7% polyester (7% RCS-certified recycled polyester)</li>
                        <li>2% elastane (71% OCS certified organically grown cotton)</li>
                    </ul>
                    <h4>CERTIFIED MATERIALS</h4>
                    <p>RCS CERTIFIED RECYCLED COTTON<br/>This fiber is made from recycled cotton textile waste. Using recycled materials helps limit the consumption of raw materials. It is certified to the Recycled Claim Standard (RCS), which verifies the recycled content and tracks it from source to final product.<br/>Certified by Intertek 193341</p>
                    <p>RCS CERTIFIED RECYCLED POLYESTER<br/>Nowadays, recycled polyester is mainly made from PET plastic waste. This is a type of plastic that is widely used in a variety of items, such as plastic bottles. Using recycled materials helps limit the production of virgin polyester fiber. It is certified to the Recycled Claim Standard (RCS), which verifies the recycled content and tracks it from source to final product.<br/>Certified by Intertek 193341</p>
                    <p>OCS CERTIFIED ORGANICALLY GROWN COTTON<br/>This fiber is produced without using artificial fertilizers or pesticides and is grown from seeds that have not been genetically modified. We are currently working with the Organic Content Standard (OCS) that supervises the process from the source to the end product.<br/>Certified by Intertek 193341</p>
            </div>
        )
    } else {
        return (
            <div>
                <p>We work with monitoring programs to guarantee compliance with the social, environmental, and health and safety standards of our products. To assess its compliance, we have developed an audit program and plans for continual improvement.</p>
                    <h3>OUTER SHELL</h3>
                    <ul>
                        <li>91% cotton (20% RCS-certified recycled cotton)</li>
                        <li>7% polyester (7% RCS-certified recycled polyester)</li>
                        <li>2% elastane (71% OCS certified organically grown cotton)</li>
                    </ul>
            </div>
        );
    }

    
}

export default Composition
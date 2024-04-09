import React from 'react';

const Care = ({isTrue}) => {

    if (isTrue == true) {
        return (
            <div>
                <p>Caring for your clothes is caring for the environment.<br/>Lower temperature washes and delicate spin cycles are gentler on garment, helping to maintain the color, shape and structure of the fabric. At the same time it reduces energy consumption that is used in care processes. </p>
                    <h3>CLOTHING CARE GUIDE</h3>
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
            </div>
        )
    } else {
        return (
            <div>
                <p>Caring for your clothes is caring for the environment.<br/>Lower temperature washes and delicate spin cycles are gentler on garment, helping to maintain the color, shape and structure of the fabric. At the same time it reduces energy consumption that is used in care processes. </p>
            </div>
        );
    }

    
}

export default Care

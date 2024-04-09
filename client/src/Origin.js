import React from 'react';

const Origin = ({isTrue}) => {

    if (isTrue == true) {
        return (
            <div>
                <p>We work with our suppliers, workers, unions, and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Objectives of Sustainable Development. </p>
                    <p>Thanks to the collaboration with our suppliers, we are working to understand the facilities and processes that are used to manufacture our products with the goal of understanding their traceability.</p>
                    <p>Made in Tunisia</p>
            </div>
        )
    } else {
        return (
            <div>
                <p>We work with our suppliers, workers, unions, and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Objectives of Sustainable Development. </p>
            </div>
        );
    }

    
}

export default Origin
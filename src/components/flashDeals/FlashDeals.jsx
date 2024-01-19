import React from 'react';
import FlashCard from './FlashCard';

const FlashDeals = ({ productItems }) => {
    return (
        <>
            <section className='flash background'>
                <div className="container">
                    <div className="heading f-flex">
                    <i className="fa fa-bolt" aria-hidden="true"></i>
                        <h1>Flash Deals</h1>
                    </div>
                    <FlashCard productItems={productItems}/>
                </div>
            </section>
        </>
    );
}

export default FlashDeals;

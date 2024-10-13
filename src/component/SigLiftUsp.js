import React from 'react';
import Image from 'next/image';

const uspres = [
    {
        uspname: "Free Delivary",
        useicon: "/images/fast-delivery.png",
        uspdis: "Free Shipping Across India"
    },
    {
        uspname: "Return & Refund",
        useicon: "/images/return-of-investment.png",
        uspdis: "10 Days Return Policy"
    },
    {
        uspname: "24x7 Support",
        useicon: "/images/24-7.png",
        uspdis: "Contact us 24 hours a day"
    },
    // {
    //     uspname: "Cash on Delivery",
    //     useicon: "/images/cash-on-delivery.png",
    //     uspdis: "Cash on Delivery for Customer"
    // },
    {
        uspname: "Warranty",
        useicon: "/images/warranty.png",
        uspdis: "One Year Warranty"
    }
]

export default function SigLiftUsp() {
    return (
        <div className='container-fuild pt-4 pb-5 mb-3'>
            <div className='row p-0 m-0'>                {
                uspres.map((item, index) => {
                    return (
                        <>
                            <div key={index} className='col-lg-3 col-md-6 col-sm-6'>
                                <div className='d-flex border mb-1 p-3 pb-0 justify-content-center'>
                                    <Image src={item.useicon} width={40} height={40} alt={item.uspname} />                                    
                                    <div style={{paddingLeft:'10px'}}>
                                    <h5 className='bold-6' style={{ paddingLeft: '10px' }}>{item.uspname}</h5>
                                    <p>{item.uspdis}</p>
                                    </div>
                                   
                                </div>

                            </div>
                        </>
                    )
                })
            }
            </div>

        </div>
    );
}

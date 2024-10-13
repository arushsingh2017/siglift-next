import React from 'react';
import Image from 'next/image';
import rr from '../../json/aboutapi'

export default function Categories() {
    // console.log(rr)
    return (
        <div className='container pt-5 pb-5'>
            <h2 className='bold-6 pt-3 pb-4 text-center'>Mobile Signal Booster</h2>
            <div className='row pt-3'>
                {
                    rr.cat.map((item) => {
                        return (
                            <>
                                <div className='col-lg-3 text-center'>
                                    <div className='border p-2'>
                                        <Image src={item.cat_icon} width={60} height={60} alt={item.catname} />
                                        <h6 className='bold-6 pt-3'>{item.catname}</h6>
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

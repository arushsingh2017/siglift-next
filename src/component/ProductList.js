"use client"
import React from 'react';
import plist from '../../json/product'
import Image from 'next/image';

import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductList() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: 'false',
        autoplay: 'false'
    };
    return (
        <div className='container pt-5 pb-4'>
            {
                plist.productdata.map((boosterList) => {
                    return (
                        <>
                            <h2 className='bold-6 pb-2'>{boosterList.heading}</h2>
                            <p>{boosterList.shor_dis}</p>
                            <Slider {...settings}>
                                {
                                    boosterList.product_cat.map((catList, index) => {
                                        return (
                                            <>
                                                <div className='col-lg-12 pt-4' key={index}>
                                                    <div className='border p-3 m-2'>
                                                        <Image src={catList.p_img} width={400} height={400} alt={catList.pname} style={{width:'100%', height:'100%'}}  />
                                                        <h6 className='bold-6 pt-3'>{catList.pname}</h6>
                                                        {/* <p>{catList.shotdis}</p> */}
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }

                                
                            </Slider>

                        </>
                    )
                })
            }
        </div>
    );
}

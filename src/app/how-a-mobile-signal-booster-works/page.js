import React from 'react';
import boosterwork from '../../../json/how_ms_booster_work'
import WorkProcess from '@/component/WorkProcess';
import BoosterKit from '@/component/BoosterKit';
export default function page() {
    // console.log(boosterwork)
    return (
        <>
            <div style={{ backgroundImage: `url("images/smartphone-app.jpg")`, padding: '6% 0', backgroundSize: 'cover', position: 'relative' }}>
                <div className='overlay1' ></div>
                <div className='container' style={{ position: 'relative' }}>
                    <h1 className='text-white bold-6 text-center'>How A Mobile Signal Booster Works?</h1>
                </div>
            </div>

            <div className='container pt-5 pb-4'>
                {
                    boosterwork.howboostrework.map((Item, index) => {
                        return (
                            <>
                                {/* <h2>{Item.heading}</h2> */}
                                <p>{Item.shortdis1}</p>
                                <p>{Item.shortdis2}</p>
                                <p>{Item.shortdis3}</p>
                            </>
                        )
                    })
                }
            <WorkProcess/> 

            </div>

            <BoosterKit/>    
        </>
    );
}

import React from 'react';
import City from './City';

export default function ServiceinCity() {
    return (
        <div className='container-fuild pt-5 pb-4' style={{ backgroundImage: `url("images/homepage-banner2.webp")`, padding: '5% 0', backgroundSize: 'cover', backgroundAttachment:'fixed', position:'relative' }}>
            <div className='overlay1'></div>
            <div className='container  pt-3 pb-4 ' style={{position:'relative'}}>
                <h2 className='bold-6 text-white pb-2'>Our Mobile Network Booster Services in India</h2>
                <p className='text-white pb-2'>We are one of the leading mobile network booster companies in Delhi offering cell phone signal booster services in Delhi NCR region like Noida, Gurgaon as well as in various other cities. Get installation services of all types of 2G, 3G, 4G mobile signal booster at best price. Major cities like Delhi, Bangalore, and Mumbai, etc. often suffer from a drop-in signal quality due to the steady unavailability of cell towers. Whether it is the inadequate cell towers or inability to access proper signals, Cell Boost has stayed dedicated to boost 4G signals and eradicating the rising network signal problems by supplying the demands with mobile network boosters for basement offices, homes, or any other areas with poor cell signal reception.</p>
                {/* <p className='text-white'>Cell Boost has been delivering mobile network boosters to boost 4G signals and provide uninterrupted and seamless connectivity to 29 states and union territories for the last 10 years providing mobile signal boosters in Mumbai, Delhi, Noida, Gurgaon, Pune, Kerala, Chennai, Hyderabad, as well as, in Bangalore. Dealing with a vast variety of local & international brands of mobile network boosters helps to solve all signal issues in 2G 3G 4G LTE Networks. Signal Boosters available at Cell Boost ensure seamless connectivity to people by dealing in devices that support all network types and carriers, whether it’s a mobile signal booster in Kerala or Delhi. Customers will find our services and products everywhere in India at the same price and of the same top-grade quality that ensures seamless network connectivity everywhere.</p> */}
                <City/>
            </div>
        </div>
    );
}

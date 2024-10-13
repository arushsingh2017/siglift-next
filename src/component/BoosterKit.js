import React from 'react';

export default function BoosterKit() {
  return (
    <div style={{ backgroundImage: `url("images/siglift-issue.jpg")`, padding: '5% 0', backgroundSize: 'cover' }}>
        <div className='container'>
            <div className='col-lg-7'>
                <h2 className='text-white'>A Network Booster Kit consists of</h2>
                  <ul className='booster-kit text-white'>
                    <li>Mobile Signal Booster</li>
                    <li>Outdoor Antenna</li>
                    <li>Indoor Antenna</li>
                    <li>Coaxial Cable for Indoor Antenna</li>
                    <li>Coaxial Cable for Outdoor Antenna</li>
                    <li>Power Supply Adaptor</li>
                  </ul>
            </div>
        </div>
      
    </div>
  );
}


import React from 'react';
import resproduct from '../../../json/product'
// import plist from '../../json/product'
import Image from 'next/image';

export default function page() {
  return (
    <>
      <div style={{ backgroundImage: `url("images/smartphone-app.jpg")`, padding: '6% 0', backgroundSize: 'cover', position: 'relative' }}>
        <div className='overlay1' ></div>
        <div className='container' style={{ position: 'relative' }}>
          <h1 className='text-white bold-6 text-center'>Mobile Signal Booster Kits</h1>
        </div>
      </div>
      <div className='container pt-5 pb-5'>
        <div className='row'>
          {
            resproduct.productdata.map((boosterList, index) => {
              return (
                <>
                  {
                    boosterList.product_cat.map((catList, index) => {
                      return (
                        <>
                          <div className='col-lg-3 col-md-4 col-sm-6  pt-4' key={index}>
                            <div className='p-3 m-1 rounded' style={{ boxShadow: '0 0 10px #ddd' }}>
                              <Image src={catList.p_img} width={400} height={400} alt={catList.pname} style={{ width: '100%', height: '100%' }} />
                              <h6 className='bold-6 pt-3'>{catList.pname}</h6>
                              <p>{catList.shotdis}</p>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                  {/* <div key={index} className='col-lg-3'>
                    <div className='border'>
                      <p>{boosterList.pname}</p>
                     </div>
                  </div> */}
                </>
              )
            })
          }
        </div>

      </div>
    </>
  );
}

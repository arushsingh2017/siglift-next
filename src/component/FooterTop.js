import React from 'react';
import Image from 'next/image';

export default function FooterTop() {
    return (
        <>
            <section className='tp-subscribe-area pt-70 pb-65 theme-bg p-relative z-index-1 suabove'>
                <div className='tp-subscribe-shape'>
                    <img className='tp-subscribe-shape-1' src='/images/subscribe-shape-1.png' />
                    <img className='tp-subscribe-shape-2' src='/images/subscribe-shape-2.png' />
                    <img className='tp-subscribe-shape-3' src='/images/subscribe-shape-3.png' />
                    <img className='tp-subscribe-shape-4' src='/images/subscribe-shape-4.png' />

                    <div className='tp-subscribe-plane'>
                        <img className='tp-subscribe-plane-shape' src='/images/plane.png' />
                        <svg width="399" height="110" class="d-none d-sm-block" viewBox="0 0 399 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.499634 1.00049C8.5 20.0005 54.2733 13.6435 60.5 40.0005C65.6128 61.6426 26.4546 130.331 15 90.0005C-9 5.5 176.5 127.5 218.5 106.5C301.051 65.2247 202 -57.9188 344.5 40.0003C364 53.3997 384 22 399 22" stroke="white" stroke-opacity="0.5" stroke-dasharray="3 3"></path>
               </svg>
               <svg class="d-sm-none" width="193" height="110" viewBox="0 0 193 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1C4.85463 20.0046 26.9085 13.6461 29.9086 40.0095C32.372 61.6569 13.5053 130.362 7.98637 90.0217C-3.57698 5.50061 85.7981 127.53 106.034 106.525C145.807 65.2398 98.0842 -57.9337 166.742 40.0093C176.137 53.412 185.773 22.0046 193 22.0046" stroke="white" stroke-opacity="0.5" stroke-dasharray="3 3"></path>
               </svg>
                    </div>
                </div>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-xl-12 col-lg-12'>
                            <div className='tp-subscribe-content'>
                                <h3 className='tp-subscribe-title text-white'>Boost Your Signal, Stay Connected Anywhere
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

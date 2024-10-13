import React from 'react';


export default function WorkProcess() {
    return (
        <div className='container-fuild mt-1 pt-5 pb-5'>
            <div className='container'>
                <h2 className='text-center pb-3 bold-6'>How Mobile Signal Booster Works?</h2>
                <div className='row'>
                    <div className='col-lg-2 text-center'>
                        <img src='/images/cell-tower.gif' alt='Cell Tower' />
                        <h1 className='bold-8 text-primary'>01.</h1>
                        <p>The cell tower sends and receives signals within a general area.</p>
                    </div>
                    <div className='col-lg-7 text-center'>
                        <img src='/images/hiw-booster-ani.webp' alt='hiw-booster-ani' style={{width:'100%'}} />
                        <h1 className='bold-8 text-info'>02.</h1>
                        <p>An outside antenna captures the signal, the signal booster amplifies the signal’s strength and indoor antenna(s) send the improved signal to your phone.</p>
                    </div>
                    <div className='col-lg-3 text-center'>
                    <img src='/images/hiw-phone-ani.webp' alt='Cell Tower' />
                        <h1 className='bold-8 text-warning'>03.</h1>
                        <p>The call, text, 4G LTE and 5G data signal returns to the tower by following the same process in reverse.</p>
                   
                    </div>
                </div>
            </div>
            
        </div>
    );
}

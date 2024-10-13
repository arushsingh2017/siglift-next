import React from 'react';
import aboutres from '../../../json/aboutapi'

export default function page() {
  // console.log(aboutdata)
  return (
    <>
      <div style={{ backgroundImage: `url("images/smartphone-app.jpg")`, padding: '6% 0', backgroundSize: 'cover', position: 'relative' }}>
        <div className='overlay1' ></div>
        <div className='container' style={{ position: 'relative' }}>
          <h1 className='text-white bold-6 text-center'>About SigLift</h1>
        </div>
      </div>

      <div className='container pt-5 pb-5'>
        {
          aboutres.aboutdata.map((item) => {
            return (
              <>
                <h2 className='bold-6'>{item.about_title}</h2>
                <p>{item.banner_dis1}</p>
                <p>{item.banner_dis2}</p>
                <p>{item.banner_dis3}</p>
                <p>{item.banner_dis4}</p>
              </>
            )
          })
        }

        <div className='mt-5' style={{width:'60%', margin:'0 auto'}}>
        <iframe style={{width:'100%', height:'400px', borderRadius:'6px', padding:'10px', border:'1px solid #ddd'}} src="https://www.youtube.com/embed/faUrVXB1L3U" ></iframe>
                
        </div>
      </div>



    </>
  );
}

import React from 'react';

const cityData= [
    {
        cityname:"Mumbai",
        pageLink:"mobile-network-booster-mumbai"
    },
    {
        cityname:"Bhopal",
        pageLink:"mobile-network-booster-bhopal"
    },
    {
        cityname:"Delhi",
        pageLink:"mobile-network-booster-bhopal"
    },
    {
        cityname:"Bangalore",
        pageLink:"mobile-network-booster-bhopal"
    },
    {
        cityname:"Kolkata",
        pageLink:"mobile-network-booster-bhopal"
    },
    {
        cityname:"Goa",
        pageLink:"mobile-network-booster-bhopal"
    },

    {
        cityname:"Jaipur",
        pageLink:"mobile-network-booster-bhopal"
    },

    {
        cityname:"Hyderabad",
        pageLink:"mobile-network-booster-bhopal"
    },

    {
        cityname:"Lucknow",
        pageLink:"mobile-network-booster-bhopal"
    },
    {
        cityname:"Raipur",
        pageLink:"mobile-network-booster-bhopal"
    },
    {
        cityname:"Bhubaneswar",
        pageLink:"mobile-network-booster-bhopal"
    },
    {
        cityname:"Chandigarh",
        pageLink:"mobile-network-booster-bhopal"
    },
    {
        cityname:"Dehradun",
        pageLink:"mobile-network-booster-bhopal"
    },
    {
        cityname:"Patna",
        pageLink:"mobile-network-booster-bhopal"
    },


]

export default function City() {

  return (
    <>
      <ul className='citywrap'>
        {
          cityData.map((cityList, index)=>{
            return(
                <>
                    <li key={index}>{cityList.cityname}</li>
                </>
            )
          })  
        }
      </ul>
     
    </>
  );
}

import React from 'react';
import clientdata from "../../json/customer"
import Image from 'next/image';

export default function Customer() {
    console.log(clientdata)
    return (
        <div>            
            {
                clientdata.Client.map((custList, index) => {
                    return (
                        <>
                            <h4>{custList.title}</h4>
                            <p>{custList.shortData}</p>
                            <h4>Govt/PSU’s</h4>
                            {
                                custList.govt.map((custLogo, index) => {
                                    return (
                                        <>  
                                         <Image key={index} src={custLogo.logo} width={100} height={100} alt={custLogo.name}/>
                                        </>
                                    )
                                })
                            }
                             <h4>Hospitality / Co-Working</h4>
                            {
                                custList.hospitality.map((custLogo, index) => {
                                    return (
                                        <>  
                                         <Image key={index} src={custLogo.logo} width={100} height={100} alt={custLogo.name}/>
                                        </>
                                    )
                                })
                            }
                             <h4>IT/ITES</h4>
                            {
                                custList.ites.map((custLogo, index) => {
                                    return (
                                        <>  
                                        <Image key={index} src={custLogo.logo} width={100} height={100} alt={custLogo.name}/>
                                       </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }
        </div>
    );
}

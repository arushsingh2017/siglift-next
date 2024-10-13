import React from 'react';
import Image from "next/image";
const carriersdata = [
    {
        name: "Jio",
        icon: '/images/jio.png'
    },
    {
        name: "Airtel",
        icon: '/images/airtel.png'
    },
    {
        name: "Vi",
        icon: '/images/vi.png'
    },
    {
        name: "BSNL",
        icon: '/images/bsnl.png'
    }

]
export default function Industries() {
    return (
        <section className='pt-0 pb-0 primary1'>
            <div className='container-fluid'>
                <div className='row row-flex flex-center'>
                    <div className='col-md-6 col-sm-12 bg-flex-cover' style={{ backgroundImage: `url("/images/woman-people-coffee.jpg")` }}>

                    </div>
                    <div className='col-md-6 col-sm-12 p-5 text-white' >
                        <h2 className='bold-6 pb-3'>Industry Expertise</h2>
                        <p>
                            Welcome to SIGLIFT – India's Premier Mobile Signal and Network Booster Provider! Your one-stop solution for all network concerns, we're here to swiftly resolve them all. Offering an extensive array of cell phone signal boosters, sourced from renowned domestic and global brands, we empower you to make endless, disruption-free phone calls. From the outset, our mission has been to streamline signal challenges across diverse carriers, ensuring seamless connectivity for people in the comfort of their homes and offices. Our extensive selection of mobile signal boosters and top-tier accessories, crafted with cutting-edge technology, ensures that your signal reaches its peak strength, providing uninterrupted connectivity. With a diverse range of brands and budgets catered to, we stand as India's foremost Mobile Network Booster Company. Contact us today, and let us assist you in finding the perfect cell phone signal booster tailored to your specific needs.
                        </p>
                        <div className='row'>
                            {
                                carriersdata.map((list, i) => {
                                    return (
                                        <>
                                            <div key={i} className='col-lg-3 col-sm-3'>                                               
                                                <Image src={list.icon} width={100} height={100} alt={list.name} />
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

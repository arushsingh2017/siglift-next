
import Image from 'next/image';
import result from '../../../json/accessories'

export default function page() {

    return (
        <>
            <div style={{ backgroundImage: `url("images/smartphone-app.jpg")`, padding: '6% 0', backgroundSize: 'cover', position: 'relative' }}>
                <div className='overlay1' ></div>
                <div className='container' style={{ position: 'relative' }}>
                    <h1 className='text-white bold-6 text-center'>Mobile Network Booster Accessories</h1>
                </div>
            </div>

            <div className='container pt-5 pb-5'>
                {
                    result.accessoriesdata.map((accessoriesItem) => {
                        return (
                            <>

                                <div className='row'>
                                    {
                                        accessoriesItem.typeaccessories.map((data, index) => {
                                            return (
                                                <>
                                                    <div key={index} className='col-lg-4 col-md-4 col-sm-6'>
                                                        <div className=' m-2 p-3 rounded mb-4' style={{ boxShadow: '0 0 10px #ddd' }}>
                                                            <Image src={data.pic} width={300} height={300} layout='responsive' alt={data.name} />
                                                            <p className='bold-6'>{data.name}</p>

                                                        </div>
                                                    </div>

                                                </>
                                            )
                                        })
                                    }
                                </div>

                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

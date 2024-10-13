import installprocess from '../../../json/install_mobile_signal_booster'

const pagetitle = "How to install it?"
const dis = "Before experiencing the advantages of , you need to install cell phone booster system proper. It makes your lazy networ mobile signal booster active, so follow the steps below. If you are not able to install it, you can also buy our mobile booster with installation services at a fixed and affordable price. Phone booster can be installed in 3 easy steps."

export default function page() {
    return (
        <>
            <div style={{ backgroundImage: `url("images/smartphone-app.jpg")`, padding: '6% 0', backgroundSize: 'cover', position: 'relative' }}>
                <div className='overlay1' ></div>
                <div className='container' style={{ position: 'relative' }}>
                    <h1 className='text-white bold-6 text-center'>How to Install Mobile Signal Booster</h1>
                </div>
            </div>
            <div className='container pt-5 pb-5'>
                <h3 className='bold-6'>{pagetitle}</h3>
                <p>{dis}</p>
                {
                    installprocess.installbooster.map((stepList, index) => {
                        return (
                            <>
                                <div className='row pt-4'>
                                    {
                                        stepList.step.map((list, i) => {
                                            return (
                                                <>
                                                    <div className='col-lg-6'>                                                        
                                                        <h5 className='bold-6'> <span className='bold-8' style={{fontSize:'40px'}}>{list.stepItem}</span> {list.stepname}</h5>
                                                        <p>{list.stepdata}</p>
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

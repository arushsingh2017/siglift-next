import result from '../../json/footer'
import Link from 'next/link';
import Image from 'next/image';

const mailicon = "/images/mail.png"

export default function Footer() {
    return (
        <div className='siglift-footer'>
            <div className='tp-footer-area siglift-footer-bg'>
                <div className='tp-footer-top pt-95 pb-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-4 col-lg-3 col-md-4 col-sm-6'>
                                <div className='tp-footer-widget footer-col-1 mb-50'>
                                    <div className='tp-footer-widget-content'>
                                        <div className='tp-footer-logo'>
                                            <img src='/images/footer-logo-white.png' alt='Logo' />
                                        </div>
                                        <div className='tp-footer-desc footer-texts-colr'>
                                            We are a leading mobile signal booster brand based in India. We specialize in providing high quality and reliable signal boosters that enhance mobile network connectivity and eliminate frustrating signal dropouts.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6'>
                                <div className='tp-footer-widget footer-col-2 mb-50'>
                                    <h4 className='tp-footer-widget-title text-white'>Useful Link</h4>
                                    <ul>
                                        {
                                            result.footerdata.map((footerList, index) => {
                                                return (
                                                    <>
                                                        {
                                                            footerList.useful_link.map((usefullink, i) => {
                                                                return (
                                                                    <>
                                                                        <li>
                                                                            <Link href={usefullink.pagesLink}>{usefullink.pagesname}</Link>
                                                                        </li>

                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6'>
                                <div className='tp-footer-widget footer-col-2 mb-50'>
                                    <h4 className='tp-footer-widget-title text-white'>Best Products</h4>
                                    <ul>
                                        {
                                            result.footerdata.map((footerList, index) => {
                                                return (
                                                    <>
                                                        {
                                                            footerList.pList.map((product, i) => {
                                                                return (
                                                                    <>
                                                                        <li>
                                                                            <Link href={product.pagesLink}>{product.pagesname}</Link>
                                                                        </li>

                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6'>
                                <div className='tp-footer-widget footer-col-2 mb-50 text-white'>
                                    <h4 className='tp-footer-widget-title '>Talk To Us</h4>
                                    <p>Got Questions? Call us</p>
                                    <h3 > +91-9650237601 </h3>
                                    <div className='d-flex'>
                                        <span> <Image src={mailicon} width={32} height={32} alt='Mail with siglift' /> </span> info@siglift.in
                                    </div>
                                    <div>
                                        <span>one</span> 150, Agarwal Cyber Plaza, Netaji Subhash Place, Pitampura, New Delhi, Delhi 110088
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

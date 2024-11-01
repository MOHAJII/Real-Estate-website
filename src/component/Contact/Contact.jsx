import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side  */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to Contact us</span>
                    <span className='secondaryText'>We always ready to help by providing the service </span>

                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexColStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span>Call</span>
                                        <span>+212 60 853 7391</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call Now</div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* right side */}
                <div className="c-side">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
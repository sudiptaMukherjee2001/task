import React from 'react'
import "../Footer/Footer.css"
import f1img from "../../Image/f1img.png"
import f3 from "../../Image/f3.png"
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="first">
                    <div className="img">
                        <img src={f1img} alt="" srcset="" />
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetu Lorem ipsum dolor sit amet consectetur Lorem ipsum
                    </div>

                </div>
                <div className="second">
                    <span>

                        Quick Link
                    </span>
                    <ul>
                        <li>Our treatment</li>
                        <li>Our Doctore</li>
                        <li>contact us</li>
                        <li>t&c</li>
                        <li>privacy Policy</li>
                    </ul>
                </div>
                <div className="third">
                    <span>

                        Our Procedures
                    </span>
                    <ul>
                        <li>Lase polis</li>
                        <li>Phimosis</li>
                        <li>Gynaecomastia</li>
                        <li>Gallstone</li>
                        <li>Online Consultation</li>
                    </ul>
                </div>
                <div className="fourth">
                    <div>
                        Follow Us
                    </div>
                    <img src={f3} alt="" srcset="" />

                </div>
            </div>
        </>
    )
}

export default Footer
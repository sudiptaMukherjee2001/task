import React from 'react'
import "../about us/aboutus.css"
import lady from "../../Image/computer lady.png"
function AboutUs() {
    return (
        <>
            <div className="aboutus">
                <div className="button">
                    <button>View all </button>
                </div>
                <div className="box">
                    <div className="title">
                        <h2>
                            Why BurlyCare?
                        </h2>
                    </div>
                    <div className="list">
                        <ul >
                            <li>
                                <span>

                                    1.Prior safe for COVID 19
                                </span>
                                <p>
                                    We are providing the service where our doctors and staff are all
                                    tested of COVID 19 and following the social distancing, our
                                    clinics are sanitized on daily basis, sterilized surgical
                                    equipment, and mandatory PPE kits during surgery.
                                </p>
                            </li>
                            <li>
                                <span>
                                    2..Prime surgery experience
                                </span>
                                <p>
                                    A greedy medical coordinator helps you throughout the
                                    surgery outing from insurance paperwork, to free commute
                                    from home to hospital & back and admission-discharge process
                                    at the hospital with convenience
                                </p>
                            </li>
                            <li>
                                <span>
                                    3..Medical expertise with best technology
                                </span>

                                <p>
                                    Our surgeons spend a lot of time with you to diagnose your
                                    condition. You are assisted in all pre-surgery medical
                                    diagnostics. We offer advanced laser and laparoscopic surgical
                                    treatments.
                                </p>
                            </li>
                            <li>
                                <span>
                                    4..After the surgery done
                                </span>
                                <p>
                                    We take care of regular follow-ups post-surgery to take care of
                                    your health our experts guide you about your diets and
                                    excercise
                                </p>
                            </li>
                        </ul>
                        <div className="image">
                            <img src={lady} alt="" srcset="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs
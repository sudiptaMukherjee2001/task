import React from 'react'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "../askedQue/Faq.css"
function Faq() {
    return (
        <>
            <div className="faq">
                <div className="up">

                    <div className="title">
                        Frequently Asked Questions
                    </div>
                    <div className="para">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut
                    </div>
                </div>
                <div className="mid">
                    <div className="left">
                        <ul>
                            <li>
                                <div className="content">
                                    <div className="que">
                                        <AiOutlineQuestionCircle style={{ fontSize: "2rem", }} className='icon' />
                                        How Burlycare takes care of patients on the
                                        day of the surgery?
                                    </div>
                                    <div className="ans">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut

                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <div className="que">
                                        <AiOutlineQuestionCircle style={{ fontSize: "2rem", }} className='icon' />
                                        How Burlycare takes care of patients on the
                                        day of the surgery?
                                    </div>
                                    <div className="ans">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut

                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li>
                                <div className="content">
                                    <div className="que">
                                        <AiOutlineQuestionCircle style={{ fontSize: "2rem" }} className='icon' />
                                        How Burlycare takes care of patients on the
                                        day of the surgery?
                                    </div>
                                    <div className="ans">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut

                                    </div>

                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <div className="que">
                                        <AiOutlineQuestionCircle style={{ fontSize: "2rem", }} className='icon' />
                                        How Burlycare takes care of patients on the
                                        day of the surgery?
                                    </div>
                                    <div className="ans">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut

                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="down">
                    <button> view all </button>
                </div>
            </div>
        </>
    )
}

export default Faq
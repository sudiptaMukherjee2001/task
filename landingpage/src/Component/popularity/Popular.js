import React from 'react'
import { HiUsers } from "react-icons/hi";
import { FaRegHospital } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillBuildingsFill } from "react-icons/bs";
import "../popularity/Popular.css"
function Popular() {
    return (
        <>
            <div className="pupularity">
                <div className="up">

                    <div className="name">
                        BurlyCare in Numbers
                    </div>
                    <div className="desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ratione exercitationem est repudiandae quasi assumenda, repellendus provident facere at...
                    </div>
                </div>
                <div className="down">
                    <div className="cards">
                        <HiUsers />
                        <span>
                            300+
                        </span>
                        <p>
                            Happy patients
                        </p>
                    </div>
                    <div className="cards">
                        <FaRegHospital />
                        <span>
                            100+
                        </span>
                        <p>
                            Hospitals
                        </p>
                    </div>
                    <div className="cards">
                        <AiOutlineUser />
                        <span>
                            200+
                        </span>
                        <p>
                            Doctors
                        </p>
                    </div>
                    <div className="cards">
                        <BsFillBuildingsFill />
                        <span>
                            3+
                        </span>
                        <p>
                            Cites
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Popular
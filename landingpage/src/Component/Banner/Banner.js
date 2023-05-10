import React from 'react'

import "../Banner/Banner.css"
import Desk from "../../Image/Desk.png"
import wheelchair from "../../Image/wheelchair.png"
import sofa from "../../Image/sofa.png"
import twoPeople from "../../Image/Two people.png"
import Facility from '../Facility/Facility'
import { service } from '../../service'

function Banner() {
    return (
        <>

            <div className='banner'>
                <div className="upper">

                    <div className="desk">

                        <img src={Desk} alt="" srcset="" />
                    </div>
                    <div className="wheelChair">

                        <img src={wheelchair} alt="" srcset="" />
                    </div>
                    <div className="sofa">

                        <img src={sofa} alt="" srcset="" />
                    </div>
                    <div className="twopeople">

                        <img src={twoPeople} alt="" srcset="" />
                    </div>
                </div>
                <div className="lower">
                    <h2>
                        Surgeries we Provide
                    </h2>

                    <div className='allfacility'>

                        <Facility service={service} />
                    </div>


                </div>
            </div>

        </>
    )
}

export default Banner
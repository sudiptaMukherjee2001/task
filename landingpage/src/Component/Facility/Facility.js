import React from 'react'
import "../Facility/Facility.css"

function Facility({ service }) {

    return (
        <>
            {
                service.map((item, id) => {
                    return (

                        <div className="facilityCard" key={id}>
                            <div className="image">

                                <img src={item.leg} alt="" srcset="" />
                            </div>
                            <div className="title">

                                <span>{item.serviceName}</span>
                            </div>
                            <div className="desc">

                                <p>{item.desc}</p>
                            </div>


                        </div>
                    )

                })
            }
        </>
    )
}

export default Facility
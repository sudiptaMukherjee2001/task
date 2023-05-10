import React from 'react'
import "../Brief/Brief.css"

function Brief() {
    return (
        <>
            <div className="briefSection">
                <h1>
                    Book <span>
                        Free Appointments
                    </span> With Our
                    <p>

                        Expert Doctors!
                    </p>

                </h1>
                <p>
                    Get full medical assistance and consultation for diseases
                    Hassle-free experience throughout your treatment.
                </p>
                <div className="bookDoctor">

                    <button className='appointments'>Book Appointments</button>
                    <button className='call'>Call our Agent</button>
                </div>

            </div>
        </>
    )
}

export default Brief
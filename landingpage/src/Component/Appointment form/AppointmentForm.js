import React from 'react'
import "../Appointment form/Appointment.css"
function AppointmentForm() {
    return (
        <div className="appointment">
            <div className="title">
                Let's Schedule Your Appointment
            </div>
            <div className="para">
                We would love to hear from you!
            </div>
            <div className="inputBox">
                <input type="text" name="" id="" placeholder='Full name' />
                <input type="text" name="" id="" placeholder='Phone number' />
                <input type="text" name="" id="" placeholder='Select city' />
                <input type="text" name="" id="" placeholder='select your treatment' />
            </div>
            <div className="btn">
                <button> Submit</button>
            </div>
        </div>
    )
}

export default AppointmentForm
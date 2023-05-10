import React from 'react'
import "../feedbackform/feedbackform.css"
function Feedbackform() {
    return (
        <>
            <div className="feedback">
                <div className="title">
                    Have Feedback?
                </div>
                <div className="para">
                    Help us to improve by providing your feedbacks!
                </div>
                <div className="inputBox">
                    <input type="text" name="" id="" placeholder='Full name' />
                    <textarea name="" id="" cols="20" rows="4" placeholder='Message'></textarea>

                </div>
                <div className="btn">
                    <button> Submit</button>
                </div>
            </div>
        </>
    )
}

export default Feedbackform
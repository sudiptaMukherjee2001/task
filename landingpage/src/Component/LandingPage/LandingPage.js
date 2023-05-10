import React from 'react'
import UpperHeader from '../UpperHeader/UpperHeader'
import NavBar from '../NavigationBar/NavBar'
import Brief from '../Brief/Brief'
import Banner from '../Banner/Banner'
import Facility from '../Facility/Facility'
import AboutUs from '../about us/AboutUs'
import Popular from '../popularity/Popular'
import Review from '../review/Review'
import AppointmentForm from '../Appointment form/AppointmentForm'
import Faq from '../askedQue/Faq'
import Feedbackform from '../feedbackform/Feedbackform'
import Footer from '../Footer/Footer'

import "../LandingPage/LandingPage.css"


function LandingPage() {
    return (
        <>
            <div className='landingPage'>
                <div className="header">

                    <UpperHeader />
                    <NavBar />
                </div>
                <Brief />
                <Banner />
                <AboutUs />
                <Popular />
                <Review />
                <AppointmentForm />
                <Faq />
                <Feedbackform />
                <Footer />


            </div>
        </>
    )
}

export default LandingPage
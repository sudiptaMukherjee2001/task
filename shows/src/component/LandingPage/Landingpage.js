import React, { useEffect } from 'react'
import "../LandingPage/Landingpage.scss"
import Moviecard from '../MovieCard/Moviecard'
import { useDispatch } from "react-redux"
import { getAllShows } from '../../features/apicallSlice'
function Landingpage() {
    const Dispatch = useDispatch()
    useEffect(() => {
        Dispatch(getAllShows());

    })
    return (
        <>
            <div className="landingPage">
                <Moviecard />
            </div>
        </>
    )
}

export default Landingpage
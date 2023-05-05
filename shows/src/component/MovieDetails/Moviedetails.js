import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useParams, useNavigate } from 'react-router-dom';
import { getSelectShowData } from '../../features/apicallSlice';
import "../MovieDetails/Moviedetails.scss"

function Moviedetails() {
    const { imdbId } = useParams();
    const Dispatch = useDispatch();
    const Navigate = useNavigate();
    const { selectshows } = useSelector((state) => state.showsData);



    const cleanSummary = selectshows?.summary?.replace(/<\/?(p|b)[^>]*>/gi, " ");


    useEffect(() => {
        Dispatch(getSelectShowData(imdbId))
    }, [Dispatch, imdbId])

    //navigate to booking page
    const handelBook = () => {
        Navigate(`/show/booking/${imdbId}`)

    }
    return (
        <>
            <div className="banner">
                <div className="aboutMovie">
                    <div className="movieDetailsTitle">
                        <h1>
                            {selectshows?.name
                            }
                        </h1>
                    </div>
                    <div className="movieInfo">
                        <ul>
                            <li>
                                Language⭐:{selectshows?.language
                                }
                            </li>

                            <li>RunTime▶️:{selectshows?.runtime} min</li>
                            <li>
                                IMDB Rating⭐:{selectshows?.rating?.average ? selectshows?.rating?.average : 9}
                            </li>

                        </ul>
                    </div>
                    <div className="description">
                        {cleanSummary
                        }

                    </div>
                    <div className="btn">
                        <button onClick={handelBook}>
                            book a ticket
                        </button>
                    </div>

                </div>

                <div className="moviePoster">
                    <img src={selectshows?.image?.medium} alt="" srcset="" />
                </div>

            </div>
        </>
    )
}

export default Moviedetails
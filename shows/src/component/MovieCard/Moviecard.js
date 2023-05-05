import React from 'react'
import { useSelector } from "react-redux"
import "../MovieCard/Moviecard.scss"
import { Link } from 'react-router-dom';
function Moviecard() {
    const { initialshows } = useSelector((state) => state.showsData);
    // console.log("initial shows", initialshows?.show)


    const allShows = initialshows.map((item) => item.show);
    console.log("all shows", allShows)

    return (
        <>

            {
                allShows.map((item, id) => {
                    return (
                        <Link to={`shows/${item.externals.imdb}`}>
                            <div className="card" key={id}>
                                <div className="image">

                                    <img src={item?.image?.medium} alt="Image not found" />
                                </div>
                                <div className="text">
                                    <h2>
                                        {item?.name}
                                    </h2>

                                </div>


                            </div>
                        </Link>
                    )
                })
            }

        </>
    )
}

export default Moviecard
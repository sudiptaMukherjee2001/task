import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../Bookingform/Bookingform.scss"
function Bookingform() {
    const [name, setname] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const { id } = useParams();
    console.log("useParams", id);
    const { selectshows } = useSelector((state) => state.showsData);

    const handelSubmit = (e) => e.preventDefault();

    const handelStore = () => {
        localStorage.setItem("username", name);
        localStorage.setItem("Phone Number", number);
        localStorage.setItem("Email", email);
        localStorage.setItem("Showname", selectshows?.name);
        // setname(``);
        // setEmail(``);
        // setNumber(``);
        alert(`SHOW BOOKED🎉🎉`)

    }
    return (
        <>
            <div className="form">
                <form action="" onSubmit={handelSubmit}>
                    <div className="moviePoster">
                        <img src={selectshows?.image?.medium} alt="" srcset="" />
                    </div>

                    <div className="name">
                        Enter Your name:
                        <input type="text" name="" id="" value={name} onChange={(e) => { setname(e.target.value) }} />
                    </div>
                    <div className="phoneNumber">
                        Enter your number:
                        <input type="tel" name="" id="" value={number} onChange={(e) => { setNumber(e.target.value) }} />
                    </div>
                    <div className="email">
                        Enter your email:
                        <input type="email" name="" id="" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="showname">
                        Show name:
                        <span>

                            {selectshows?.name}
                        </span>

                    </div>
                    <div className="ratings">
                        Ratings:
                        <span>

                            {
                                selectshows?.rating?.average ? selectshows?.rating?.average : 9

                            }
                        </span>
                    </div>
                    <button onClick={handelStore}>
                        Submit
                    </button>
                </form>

            </div>
        </>
    )
}

export default Bookingform
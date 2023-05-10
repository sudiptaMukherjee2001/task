import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../Image/logo.png"
import "../UpperHeader/UpperHeader.css"
import { AiOutlineSearch } from "react-icons/ai";
// 
function UpperHeader() {
    return (
        <div className='UpperHeader'>
            <div className="left">
                <img src={logo} alt="" srcset="" />
                <span className='text'>
                    <p>
                        Delhi
                    </p>
                    <IoIosArrowDown />
                </span>
                <div className="inputBox">
                    <AiOutlineSearch className='search' />
                    <input type="text" placeholder=' Search here...' name="" id="" />
                </div>
            </div>
            <div className="right">
                <p>
                    call 8493-384-0390
                </p>

                <button className='Login'> Log in/Sign Up</button>
            </div>
        </div>
    )
}

export default UpperHeader
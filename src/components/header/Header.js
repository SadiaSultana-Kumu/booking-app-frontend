import React, { useState } from 'react';
import { FaBed, FaTaxi } from 'react-icons/fa';
import { ImAirplane } from 'react-icons/im';
import { AiFillCar } from 'react-icons/ai';
import { RiUserLocationFill } from 'react-icons/ri';
import { BiCalendar } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'

const Header = ({ type }) => {

    const [openCalender, setOpenCalender] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    return (
        <div className="header">
            <div className={
                type === "list" ? "header-container listMode" : "header-container"
            }>
                <div className="header-list">
                    <div className="header-list-item active">
                        <FaBed />
                        <span>Stays</span>
                    </div>
                    <div className="header-list-item">
                        <ImAirplane />
                        <span>Flights</span>
                    </div>
                    <div className="header-list-item">
                        <AiFillCar />
                        <span>Car Rentals</span>
                    </div>
                    <div className="header-list-item">
                        <RiUserLocationFill />
                        <span>Attractions</span>
                    </div>
                    <div className="header-list-item">
                        <FaTaxi />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                {type !== "list" && (
                    <>
                        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
                        <p className="headerDescription">Get rewarded for your travels - unlock instant savings of 10% or more with a free shortTrip.com account</p>
                        <button className="headerButton">Sign In / Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FaBed className='headerIcon' />
                                <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
                            </div>
                            <div className="headerSearchItem">
                                <BiCalendar className='headerIcon' />
                                <span onClick={() => setOpenCalender(!openCalender)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                                {openCalender && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='date'
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <BsFillPersonFill className='headerIcon' />
                                <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                                {openOptions && (
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.adult <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("adult", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.adult}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("adult", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Children</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.children <= 0}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("children", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.children}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("children", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="optionItem">
                                            <span className="optionText">Room</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.room <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("room", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                                                    {options.room}
                                                </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("room", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <div className="headerButton">Search</div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
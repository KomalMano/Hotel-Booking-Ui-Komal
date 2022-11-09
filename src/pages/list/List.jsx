import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './list.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/searcItem/SearchItem'

const List = () => {

  const location = useLocation()
  const [destinantion, setDestination] = useState(location.state.destinantion)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)


  // console.log(location)
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          
          {/* 1st item will be hotels list*/}
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destinantion} type='text' />
            </div>

            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} 
                to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {/* write my condition here */}
              {openDate && ( <DateRange 
                onChange={item => setDate([item.selection])} 
                minDate={new Date()}
                ranges={date}
              />            
              )}  
            </div>

            {/* lets create an other options */}
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adult
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}/>
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Children
                </span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
              </div>

              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Room
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
              </div>
              </div>
            </div>

            {/* add button inside my container */}
            <button>Search</button>
          </div>
          {/* 2nd will be  */}
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List

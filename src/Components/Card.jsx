import React from 'react'

import Amazon from '../assets/amazon.svg'

const Card = ({img, save, bookmarkImg, companyName, days, position, time, schedule, hour, location}) => {
  return (
    <>
        <div className="card">
            <div className="top">
                <div className="top-card">
                    <div className="top-top">
                        <img src={img} alt="amazon-img" />
                    </div>
                    <div className="top-bottom" style={{backgroundColor: save === "saved" ? "#B7B89F" : "#fafafa"}}>
                          <h5 className="save" style={{ color: save === "saved" ? "#000" : "#B7B89F"}}>
                            { save }
                            <span>
                                { bookmarkImg }
                            </span>
                        </h5>
                    </div>
                </div>
                <div className="top-center">
                    <h5 className="company-name">
                        { companyName } <span>{ days }</span>
                    </h5>
                    <h4 className="company-position">
                        { position }
                    </h4>
                    <div className="company-info">
                        <h5 className="company-time">
                            { time }
                        </h5>
                        <h5 className="company-schedule">
                            { schedule }
                        </h5>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="bottom-info">
                    <h5 className="bottom-heading">
                        { hour }<br />
                        <span>{ location }</span>
                    </h5>
                    
                    <a href="#" className="apply-now">
                        apply now
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card

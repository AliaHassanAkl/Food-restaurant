import React from 'react'
import './Header.css';
import myimg from "/public/images/136529525_7bb73310-2fa3-44c4-9666-df85b625a3c7.jpg"

export default function Header() {
  return (
    <header>
        <div className="container">
          <div className="row">
          <div className="col-md-6 header-text">
                <h2>
                    enjoy your food choice.
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repudiandae quos tempore est minima distinctio recusandae quasi id maiores voluptas!</p>
                <button className='orderBtn'>Make Order</button>
                <button className=' moreBtn'>Show More</button>

            </div>
            <div className="col-md-6 header-img   d-flex justify-content-end">
              {/* <img src={myimg} alt="" /> */}
              
            </div>
          </div>
            
        </div>
        
    </header>
  )
}

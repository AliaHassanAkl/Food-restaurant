
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp,faYoutube,faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'; 
import {faFacebookF} from   '@fortawesome/free-brands-svg-icons'
import "./Footer.css";

export default function Footer() {
  return (<>
    <div id='myfooter'>
      <div className='footerLinks d-flex justify-content-center '>
            <h4 className='mx-5 my-3 '>Menu</h4>
            <h4 className='mx-5 my-3 '> Location </h4>
            <h4 className='mx-5 my-3 '>Gallery</h4>
            <h4></h4>
        </div>
        <div className="social_media d-flex justify-content-center my-3 ">
            <FontAwesomeIcon icon={faFacebookF} className='mx-3 fs-3 facebook icon' />    
            <FontAwesomeIcon icon={faWhatsapp}  className='mx-3 fs-3 whatsapp icon'/>    
            <FontAwesomeIcon icon={faYoutube}  className='mx-3 fs-3 youtube icon ' />  
            <FontAwesomeIcon icon={faInstagram}  className='mx-3 fs-3 insta icon' />  
        </div>
        <div className="rights d-flex justify-content-center">
            <p><FontAwesomeIcon icon={faCopyright} />  2023 @l!^ All rights reserved.
            </p>

        </div>
    </div>
      
  </>
     
  )
}

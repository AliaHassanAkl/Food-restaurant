import React from 'react'
import './About.css'
export default function About() {
  return (
    <div>
      <div className="container " id='about'>
        <div className="row my-5">
            <div className="col-md-5 about_img ">
                <img src="/images/about meal.jpg" alt="" />
            </div>
            <div className="col-md-7 d-flex align-items-center">
                <div className='about-description py-3'>
                    <h1>We believe that the best ingredient makes more delicious food</h1>
                    <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem labore fuga modi voluptate quo dolorem ipsa, eligendi nostrum et a natus nam nobis quos neque? Aliquam sunt sapiente eaque cumque</p>
                    <div className='d-flex justify-content-end'>
                      <button className='morebtn'> Read More</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
        
      </div>
    </div>
  )
}

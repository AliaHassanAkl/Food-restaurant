import React from 'react'
import Header from './header'
import './Home.css'
import Footer from '../Footer/Footer'
import About from './About'


export default function Home() {
  return (
    <>   
    <div id='Home' className=''>
    <Header/>
    <section id='numbers' className='subSec' >
        <div className="container-fluid numbers">
          <div className="row text-light text-center mx-5">
            <div className="col-md-3 ">
              <h1>1234+</h1>
              <h6>savings</h6>
            </div>
            <div className="col-md-3">
              <h1>5678+</h1>
              <h6>photos</h6>
            </div>
            <div className="col-md-3">
              <h1>1044+</h1>
              <h6>rockets</h6>
            </div>
            <div className="col-md-3">
              <h1>2340+</h1>
              <h6>globes</h6>
            </div>
          </div>
        </div>
    </section>
    <About/>

    <section id='' className='findTheMenu subSec' >
        <div className="layer"></div>
        <div className="container-fluid numbers">
          <div className="row">
              <div className="col-md-8 d-flex justify-content-center align-items-center">
                 <h1>Find Our Food Menus  </h1>

              </div>
              <div className="col-md-4">
                <button>Read More</button>
              </div>
          </div>
        </div>
    </section>

    <section id='massages'className='container py-5 d-flex justify-content-center'>
      <div className="row ">
        <h2 className='text-center pb-3'>Leave Us a Massage</h2>
        <div class="mb-3">
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address"></input>
        </div>
        <div class="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your massage..." rows="10"></textarea>
        </div>
        <div className='d-flex justify-content-end'>
        <button className='w-25 submitBtn '> Submit</button>
        </div>
        
      </div>
      
      
    </section>
    
    </div>
  
    
    </>
    
    
  )
}

import React, { useEffect } from 'react'
import './Explore.css'
import axios from 'axios';
import { useState } from 'react';

export default function Explore() {
  
  const [data, setData] = useState({recipes:[] }); 


  useEffect(()=>{
    const fetchData = async()=> {
      try{
        const response= await axios.get("https://forkify-api.herokuapp.com/api/search?q=pasta");
        
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[]);
return(
  <div>
    <div id='explore'>
      <ul>
        <div className="container">
          <div className="row ">
           
            {data.recipes.map(recipe=>(
              <div className="col-md-4 mt-5 ">
                  <li key={recipe.recipe_id} >
                    <div className='card  p-5 my-1'> 
                      <h2 className='text-center'>{recipe.title} </h2>
                      <img src={recipe.image_url} alt={recipe.title}  className='' />
                      <button className='float-bottom mt-5'>Details</button>
                    </div>
                    
                  </li>
              </div>
            
          ))}
            
          </div>
        </div> 
        </ul>
    </div>
  </div>
)
}

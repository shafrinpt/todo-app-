import React, { useState } from 'react'
import myImg  from './assets/bg-main-desktop.png'
import Card from'./assets/bg-card-front.png'
import Cards from'./assets/bg-card-back.png'
import './Todo.css'
const Todo = () => {
 
  const[submit,setSubmit]=useState('')

  const handleChange = (e)=>{
   setSubmit(e.target.value)
  }

  return (
    <div className='container' >
      
      <form className='form'>

      <div className='card'>
        <img className='img1' src={myImg} />
     </div>


        <img className='img2' src={Card} />
        <img className='img2' src={Cards} />
  


      <div className='inputs'>

      <label for='chardholder-name'>CHARDHOLDER NAME:</label>
       <input id='chardholder-name' value={submit} type='text' placeholder='e.g fathima' onChange={handleChange} />  
       <label for='card-number'>CARD NUMBER:</label>
       <input id='card-number' type='text'  placeholder='e.g 1234567890'/>
      <span>
       <label for='exp'>EXP.DATE(MM/YY) </label>
       <label for='cvc'>CVC</label></span>
       <span>
       <input id='exp' type='date'/>
      <input id='cvc'  type='text' placeholder='e.g 123'/>

       </span><br></br>
       <button  type='submit'>confirm</button>
      </div>
      
      
      
      </form> 
      
    </div>
  )
}

export default Todo
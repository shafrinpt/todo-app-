import React, { useState } from 'react'
import myImg  from './assets/bg-main-desktop.png'
import Card from'./assets/bg-card-front.png'
import Cards from'./assets/bg-card-back.png'
import './Todo.css'
const Todo = () => {
 
  const[name,setName]=useState('')
  const[cardNum,setCardNum]=useState("")
  const[cal,setCal]=useState("")
  const[cvc,setCvc]=useState("")
 
  return (
    <div className='container' >
      <section>
      <div className='card'>
        <img className='img1' src={myImg} />
     </div>
      <form className='form'>

      


        <img className='front' src={Card} />
        <img className='back' src={Cards} />
  


      <div className='inputs'>
       
      <label htmlFor='chardholder-name'>CHARDHOLDER NAME:</label>
       <input id='chardholder-name' value={name} type='text' placeholder='e.g fathima' onChange={(e)=>setName(e.target.value)} />  
       <label htmlFor='card-number'>CARD NUMBER:</label>
       <input id='card-number' value={cardNum} type='text' onChange={(e)=>setCardNum(e.target.value)}  placeholder='e.g 1234567890'/>
      
       <div className="flex-1">
        <span><label htmlFor="expiry_date">Exp. Date </label>   <label htmlFor='cvc'>CVC</label>  </span>
                    <input
                      type="month"
                      name="expiry_date"
                      id="expiry_date"
                      placeholder="MM YY"
                      required
                      value={cal}
                      onChange={(e) => setCal(e.target.value)}
                    />
                  </div>
             
        <div>
       
                    
       <label htmlFor='cvc'>CVC</label>
      <input id='cvc' name='cvc' value={cvc}  type='number' onChange={(e)=>setCvc(e.target.value)} placeholder='e.g 123'/>
      </div>   
       <br></br>
       <div>
       <button  type='submit'>confirm</button>
       </div>
      </div>
      </form> 
      </section>
    </div>
  )
}

export default Todo
import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
       <h1>Get exclusive offers to your email</h1>
       <p>Subscribeto our newsletter to get the latest updates and offers.</p> 
       <div>
       <input type='email' placeholder='Your email id'/>
       <button>Subscribe</button>
       </div>
    </div>
  )
}

export default NewsLetter
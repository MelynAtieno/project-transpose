import React from 'react'
import "../Styles/Contact.css"
import {GrMapLocation, GrMail, GrPhone} from 'react-icons/gr'

function Contact() {
  return (
    <div className='contact'>

      <div className='column'>
        <GrPhone size={50}/>
      <h4>099-878-222</h4>
      <h4>073-993-652</h4>
      </div>

      <div className='column'>
      <GrMail size={50} />
      <h4><a href='mailto:transpose@gmail.com'>transpose@gmail.com</a></h4>
      </div>

      <div className='column'>
      <GrMapLocation size={50} />
      <h4>Lorem ipsum dolor</h4>
      <h4>consectetursit amet</h4>
      <h4>repellendus</h4>
      <h4>Nairobi, Kenya</h4>
      </div> 
      
    </div>
  )
}

export default Contact
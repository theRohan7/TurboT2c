import React from 'react'
import '../CSS/Form.css'

function Form() {
  return (
    <div className='form-container'>
        <div className='form-header'>
            <h2>Ready to Build Future? <br /> Let's Make it Happen</h2>
            <p>Your breakthrough idea deserves a world-class execution. Partner with T²C and transform your vision into reality.</p>
        </div>
        <form >
            <div className='form-group'>
                <label htmlFor='FirstName'>First Name</label>
                <input type='text' id='firstName' placeholder='Enter your first name' />
            </div>
            <div className='form-group'>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' id='lastName' placeholder='Enter your last name' />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email ID</label>
                <input id='email' placeholder='Email ID'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input id='phoneNumber' placeholder='+1-202-555-0174'></input>
            </div>
        </form>
            <button>Send Now</button>
      
    </div>
  )
}

export default Form

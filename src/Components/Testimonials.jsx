import React from 'react'
import '../CSS/Testimonials.css'

function Testimonials({testimonialData}) {

  return (
        <div className="testimonial-card">
            <p>{testimonialData.review}</p>
            <div className="user-info">
                <img src="" alt="" />
                <div className="user-info-content">
                    <span><b>{testimonialData.name}</b></span>
                    <span>{testimonialData.org}</span>
                </div>
            </div>
        </div>
  )
}

export default Testimonials

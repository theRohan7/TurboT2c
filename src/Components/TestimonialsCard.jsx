import React from 'react'
import '../CSS/Testimonials.css'

function TestimonialsCard({testimonialData}) {

  return (
    <div className="testimonial-card">
    <div className="testimonial-content">
      <p>{testimonialData.review}</p>
    </div>
    <div className="user-info">
      <img 
        src={testimonialData.image || ""} 
        alt={`${testimonialData.name} profile`} 
        className="user-avatar"
      />
      <div className="user-info-content">
        <span className="user-name">{testimonialData.name}</span>
        <span className="user-org">{testimonialData.org}</span>
      </div>
    </div>
  </div>
  )
}

export default TestimonialsCard

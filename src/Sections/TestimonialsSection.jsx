import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react'
import { testimonialsData } from '../Utility/Exports';
import Testimonials from '../Components/TestimonialsCard';
import '../CSS/TestimonialSection.css'

function TestimonialsSection() {
    const carouselRef = useRef(null);
  
    const scroll = (direction) => {
      if (carouselRef.current) {
        const scrollAmount = direction === "left" ? -300 : 300;
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };
  
    return (
      <div className="testimonials-section">
        <div className="section-heading">
          <h1>Testimonials</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nulla velit, maximus sit amet suscipit in, fermentum id est.
            Suspendisse consequat ornare elit."
          </p>
        </div>
        
        <div className="carousel-container">
          <button 
            className="carousel-button prev" 
            onClick={() => scroll("left")}
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <span className='radial-gradient1'></span>
            <span className='radial-gradient2'></span>
          
          <div className="testimonials-container" ref={carouselRef}>
            
            {testimonialsData.map((testimonial, idx) => (
              <Testimonials testimonialData={testimonial} key={idx} />
            ))}
          </div>
          
          <button 
            className="carousel-button next" 
            onClick={() => scroll("right")}
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    );
  }

export default TestimonialsSection

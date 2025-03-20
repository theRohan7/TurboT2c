import React, { useRef } from "react";
import { turboCardsData } from "../Utility/Exports";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import '../CSS/TechnologySection.css'

function TechnologySection() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div className="technology-section">
      <div className="section-heading">
        <h1>Technology, Turbocharged</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          nulla velit, maximus sit amet suscipit in, fermentum id est.
          Suspendisse consequat ornare elit."
        </p>
      </div>
      
      <div className="carousel-container">
        <button 
          className="carousel-button carousel-left" 
          onClick={() => scroll("left")}
          aria-label="Previous card"
        >
          <ChevronLeft />
        </button>
        
        <div className="turbo-cards-container" ref={carouselRef}>
          {turboCardsData.map((card, idx) => (
            <div className="turbo-card" key={idx}>
              <img src={`${card.image}`} alt={`${card.name}`} />
              <div className="turbo-card-content">
                <h3>{card.name}</h3>
                <p>{card.description}</p>
                <a href="#" className="card-link">
                  Check Now <ArrowUpRight className="arrow-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-button carousel-right" 
          onClick={() => scroll("right")}
          aria-label="Next card"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default TechnologySection;

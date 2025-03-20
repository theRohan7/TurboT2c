import React from 'react'
import { tsqaured } from '../Utility/Exports'
import { FolderOpen } from 'lucide-react'
import '../CSS/whyTSection.css'

function WhyTSection() {
  return (
    <div className="why-t-section">
    <div className="section-heading">
      <h1>Why Choose TSquaredC</h1>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        nulla velit, maximus sit amet suscipit in, fermentum id est.
        Suspendisse consequat ornare elit."
      </p>
    </div>

    <div className="tsquared-card-container">
      {tsqaured.map((card, idx) => (
        <div
          className="tsquared-card"
          key={idx}
          style={{
            backgroundImage: `url(${card.backgroundImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="card-content">
            <h4>
              <FolderOpen className="icon" /> {card.name}
            </h4>
            <p>{card.description}</p>
          </div>

          <img src={card.image} alt={card.name} className="card-image" />
        </div>
      ))}
    </div>
  </div>
  )
}

export default WhyTSection

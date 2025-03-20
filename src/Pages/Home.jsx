import React from "react";
import "../CSS/Home.css";
import Logo from "../assets/Logo.svg";
import solution1 from "../assets/solution1.png";
import {
  Headphones,
  Mail,
  MapPin,
  Menu,
} from "lucide-react";
import {
  AgentQL,
  AIDriven,
  fasterBuild,
  ken42Dashboard,
  NavBtns,
  onDemand,
  optimileDashboard,
  Partners,
  rocketImage,
  solution2,
} from "../Utility/Exports";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import TechnologySection from "../Sections/TechnologySection";
import WhyTSection from "../Sections/WhyTSection";
import TestimonialsSection from "../Sections/TestimonialsSection";

function Home() {
  return (
    <main>
      <section className="hero-section">
        <nav className="navbar">
          <div className="logo">
            <img src={Logo} alt="Brand Logo" />
          </div>
          <div className="nav-btns">
            <ul>
              {NavBtns.map((btn, index) => (
                <li key={index}>
                  <a href={btn.path}>{btn.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <button className="get-started-btn">Get Started</button>
          <button className="hamburger-btn">
            <Menu className="hamburger-icon" />
          </button>
        </nav>

        <div className="hero-content">
          <div className="text-content">
            <h1>
              The Future of Tech <br />
              <span>Starts Here</span>
            </h1>
            <p>
              From concept to market, T²C supercharges your tech journey with
              top-tier talent, cutting-edge tools, and rapid execution. Let's
              build groundbreaking solutions that define tomorrow.
            </p>

            <button>Let's Build Everything Extraodinary</button>

            <div className="partners-container">
              <h4>Trusted by the best</h4>
              <div className="partners">
                {Partners.map((partner, idx) => (
                  <img
                    src={partner.logo}
                    key={idx}
                    alt="Partners Logo"
                    className="partners-icon"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="image-content">sadfasf</div>
        </div>
      </section>
      <section className="innovation-section">
        <div className="section-heading innovation-section-heading">
          <h1>Innovation in Action</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nulla velit, maximus sit amet suscipit in, fermentum id est.
            Suspendisse consequat ornare elit.
          </p>
        </div>
        <div className="dashboard-card-container">
          <div className="dashboard-card">
            <img src={ken42Dashboard} alt="Ken 42 Dashboard" />
            <h3>
              Revolutionized Kenverse’s AI <br /> capabilities in just 6 months
            </h3>
            <p>
              From concept to deployment, T²C engineered an AI transformation
              that positioned Kenverse as a market leader.
            </p>
          </div>
          <div className="dashboard-card">
            <img src={optimileDashboard} alt="Optimile Dashboard" />
            <h3>
              Transformed Optimile into a <br /> seamless logistics powerhouse
            </h3>
            <p>
              Reimagined and redefined by T²C, Optimile now sets the standard
              for seamless logistics.
            </p>
          </div>
        </div>
      </section>
      <section className="technology-section">
        <TechnologySection />
      </section>
      <section className="about-TSquare">
          <span className="radial-gradient"></span>
          <div className="about-T-content">
            <h1>About TSquaredC</h1>
            <p>
              At T2C, we push the boundaries of technology for businesses
              worldwide by creating solutions that are both innovative and
              robust. Our focus is on seamless integration and strategic
              innovation, ensuring efficient operations and scalable growth.
              <br />
              <br />
              <br />
              We are committed to empowering businesses in a digital-first
              world, simplifying complex systems to address challenges and
              unlock opportunities. Our scalable solutions are designed for high
              performance, prioritizing customer success and sustainable growth.
            </p>
          </div>
          <img src={rocketImage} alt="" />
        </section>
      <section className="Tsqaured-container">
         <WhyTSection />
        </section>
      <section className="solutions-section">
        <div className="section-heading">
          <h1>
            Choose Your Solution <br /> For Emerging Businnesses
          </h1>
          <p>Propel your new age business forrward with our Solutions:</p>
        </div>
        <div className="solutions-card-container">
          <span className="solution-radial-gradient1"></span>
          <span className="solution-radial-gradient2"></span>
          <div className="solution-card plug-solution">
            <img src={solution1} alt="" />
            <h4>Plug and Play solutions</h4>
            <div className="solution-description">
              <p>
                <span>Instant Integration, Immediate Impact:</span> <br /> Dive
                into the market without delay, utilizing our fully integrated
                tech stack that meshes seamlessly with your operations.
              </p>
              <button className="solution-button" >Customize Your Path</button>
            </div>
          </div>
          <div className="solution-card custom-solution">
            <img src={solution2} alt="" />
            <h4>Customizable Solutions</h4>
            <div className="solution-description">
              <p>
                Customizable Solutions designed for your business's unique
                demands & growth trajectory. <br />
                <span>Build, Expand:</span> <br />
                Engineered for long-term evolution, these solutions ensure your
                technology infrastructure grows as dynamically as your business.
              </p>
              <button className="solution-button" >Accelerate with Plug & Play</button>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <TestimonialsSection />
      </section>
      <section className="form-section">
        <div className="form-div">
        <Form />
        </div>
        <div className="helpline-cards">
          <div className="helpline-card">
            <div className="helpine-icon">
              <MapPin color="#2029C8" size={30} />
            </div>
            <div className="helpline-content">
              <h4>Location</h4>
              <p>
                Turbostart Technology Development <br />
                Centre Pvt Ltd CIN: U72900TZ2022PTC029746 <br />
                Address: 1st Floor, Mayflower Valencia, <br />
                Avinashi Road, Coimbatore - 641004, TN, IN
              </p>
            </div>
          </div>
          <div className="helpline-card">
            <div className="helpine-icon">
              <Headphones color="#2029C8" size={30} />
            </div>
            <div className="helpline-content">
              <h4>Contact Number</h4>
              <p>
                +91 7598658
              </p>
            </div>
          </div>
          <div className="helpline-card">
            <div className="helpine-icon">
              <Mail color="#2029C8" size={30} />
            </div>
            <div className="helpline-content">
              <h4>email Address</h4>
              <p>
                t2c@tsquaredc.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-section">
      <Footer />
      </section>
    </main>
  );
}

export default Home;

import React, { useEffect, useRef } from 'react';
import './Service.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_Data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Service = () => {
  const cardRefs = useRef([]);
  const flippedCards = useRef(new Set()); // ✅ track flipped cards

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute('data-index');

          if (entry.isIntersecting && !flippedCards.current.has(index)) {
            entry.target.classList.add('flip-in');
            flippedCards.current.add(index); // ✅ mark as flipped
            observer.unobserve(entry.target); // ✅ optional cleanup
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleReadMoreClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div id="project" className="services">
      <div className="services-title">
        <h1>My Project</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            data-index={index} // ✅ for tracking flip state
            className="services-formet"
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div
              className="services-readmore"
              onClick={() => handleReadMoreClick(service.git_link)}
            >
              <p>Read More</p>
              <img src={arrow_icon} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

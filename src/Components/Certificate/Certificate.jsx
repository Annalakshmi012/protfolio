import React, { useEffect, useRef } from 'react';
import './Certificate.css';
import mywork_data from '../../assets/mywork_data';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon from '../../assets/arrow_icon.svg';

const Certificate = () => {
  const cardRefs = useRef([]);
  const shownCards = useRef(new Set()); // track which cards have been shown

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute('data-index');

          if (entry.isIntersecting && !shownCards.current.has(index)) {
            entry.target.classList.add('zoom-in');
            shownCards.current.add(index);
            observer.unobserve(entry.target);
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

  return (
    <div id="certificate" className="certificate">
      <div className="certificate-title">
        <h1>Certificate</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="certificate-container">
        {mywork_data.map((work, index) => (
          <div
            className="certificate-card"
            key={index}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <img src={work.w_img} alt={work.w_name} />
          </div>
        ))}
      </div>

      {/* 
      <div className="certificate-show">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow" />
      </div> 
      */}
    </div>
  );
};

export default Certificate;

import React, { useState } from 'react';
import './Work.css';
import diabetes from '../../assets/images/diabetes.jpg';
import HealthInsurance from '../../assets/images/Health-insurance.jpg';
import healthCare from '../../assets/images/heartCare.jpg';
import planned_health from '../../assets/images/planned_health.jpg';
import medical from '../../assets/images/medical.jpg';
import health from '../../assets/images/health.jpg';

export const Work = () => {
  const [modalImage, setModalImage] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  const openModal = (image, link) => {
    setModalImage(image);
    setSelectedLink(link);
  };

  const closeModal = () => {
    setModalImage(null);
    setSelectedLink(null);
  };

  const healthInfoLinks = [
    'https://www.sciencedirect.com/science/article/pii/S0020653920323637',
    'https://www.bmj.com/content/323/7313/625.short',
    'https://journals.lww.com/jonmd/citation/2000/11000/mental_health_and_immigration_s_aaas__where_are_we.3.aspx',
    'https://www.bmj.com/content/311/6998/171.short',
    'https://www.nejm.org/doi/full/10.1056/NEJMra040403',
    'https://www.annualreviews.org/doi/abs/10.1146/annurev.publhealth.28.021406.144042',
  ];

return (
    <>
      <div>
        <div className="grid-container">
          {[diabetes, medical, HealthInsurance, healthCare, planned_health, health].map(
            (image, index) => (
              <div key={index} className="grid-item portfolio-item">
                <img
                  className="card-img-top about-img"
                  alt={`image-${index}`}
                  src={image}
                  onClick={() => openModal(image, healthInfoLinks[index])}
                />
                <div className="link-container">
                  <button className="health-link" onClick={() => openModal(image, healthInfoLinks[index])}>
                    View More
                  </button>
                  {modalImage && selectedLink && index === 1 && (
                    <a href={selectedLink} target="_blank" rel="noopener noreferrer">
                      <button className="modal-link">Go to Health Info</button>
                    </a>
                  )}
                </div>
              </div>
            )
          )}
        </div>
        
      </div>
  
      {modalImage && (
        <div className="modal-container">
          <div className="modal-content">
            <img className="modal-img" alt="modal" src={modalImage} />
            {selectedLink && (
              <a href={selectedLink} target="_blank" rel="noopener noreferrer">
                <button className="modal-link">Go to Health Info</button>
              </a>
            )}
            <button className="modal-close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
  
};
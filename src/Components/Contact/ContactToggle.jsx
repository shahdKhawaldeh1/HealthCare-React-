import React from 'react';

const ContactToggle = () => {
  const toggleContact = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.classList.toggle('show-contact');
    }
  };

  const contactButtons = document.querySelectorAll('.contact-btn');
  if (contactButtons) {
    contactButtons.forEach((button) => (button.onclick = toggleContact));
  }

  const formOverlay = document.querySelector('.form-overlay');
  if (formOverlay) {
    formOverlay.onclick = toggleContact;
  }

  const closeContact = document.getElementById('close-contact');
  if (closeContact) {
    closeContact.addEventListener('click', toggleContact);
  };

  return  
};

export default ContactToggle;

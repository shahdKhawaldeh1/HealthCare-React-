import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
   <>
   <section className="contact-section">
        <div className="form-overlay" />
        <div className="form-container">
          <div id="close-contact">
            <i className="fa-solid fa-xmark" />
          </div>
          <div className="row">
            <form>
              <div className="form-group">
                <label  className ="form-label" htmlFor="input-name">Name</label>
                <input type="text" id="input-name" name="name" pattern="[A-Za-z]{1,}" required />
              </div>
              <div className="form-group">
                <label className ="form-label" htmlFor="input-email">Email</label>
                <input type="email" id="input-email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
              </div>
              <div className="form-group">
                <label  className ="form-label" htmlFor="input-msg">Message</label>
                <textarea required name="msg" id="input-msg" defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
   </>
  )
}

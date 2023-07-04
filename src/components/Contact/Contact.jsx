import React from 'react';

function Contact() {
  return (
    <>
      <div className="contact_section layout_padding">
        <div className="container">
          <h1 className="contact_text">Contact Us</h1>
        </div>
      </div>
      <div className="contact_section_2 layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 padding_0">
              <div className="mail_section">
                <div className="email_text">
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Name" name="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Email" name="Email" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="email-bt" placeholder="Phone Number" name="Email" />
                  </div>
                  <div className="form-group">
                    <textarea className="massage-bt" placeholder="Message" rows="5" id="comment" name="Massage" />
                  </div>
                  <div className="send_btn">
                    <div type="text" className="main_bt">
                      <a href="#">SEND</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 padding_0">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Eiffel+Tower+Paris+France"
                  width="600"
                  height="508"
                  frameborder="0"
                  style={{ border: '0', width: '100%' }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

/* Import image */
import mail from '../images/mail.png';

export default function Contact() {
  return (
    <div className="container">
      <div className="contactContentBox">
        <div className="form">
          <div className="contactBox ContactHeader">
            <h3 className="contactText">Do you want to talk with me? <br />Email to <a href="mailto:cathyseo.d@gmail.com">cathyseo.d@gmail.com</a> or leave your message here.</h3>
          </div>
          <div className="mb-3">
            <label for="yourName" className="form-label">Your Name</label>
            <input type="name" className="form-control" id="yourNeme"></input>
          </div>
          <div className="mb-3">
            <label for="yourEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" id="eyourEmail"></input>
          </div>
          <div className="mb-3">
            <label for="yourEmail" className="form-label">Message</label>
            <textarea type="email" className="form-control" id="eyourEmail"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        <div className="contactImgBox">
        <img src={mail}></img>
        </div>
      </div>
    </div>
  );
}
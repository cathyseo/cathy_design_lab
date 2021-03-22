/* Img import */
import illust02 from '../images/illust02.png';
import illust03 from '../images/illust03.png';
import illust04 from '../images/illust04.png';

export default function About() {
  return (
    <div className="container">
      <header className="aboutBox">
        <div>
          <div className="aboutTitle aboutTitle01">
            <div className="aboutTextImgBox">
              <div className="aboutImgBox">
                <img src={illust02} alt="Experimental image"></img>
              </div>
              <div className="aboutTextBox">
                <p>Where is here?</p>
                <h1>Such <br /><span>Experimental</span></h1>
                <p className="aboutDescription">Here is a laboratory that you can see some of my design experiments covering interaction, front-end development, UI UX Design, even my hobby.</p>
              </div>
            </div>
          </div>
          <div className="aboutTitle aboutTitle02">
            <div className="aboutTextImgBox aboutTextImgBox02">
              <div className="aboutImgBox">
                <img src={illust03} alt="Challenging image"></img>
              </div>
              <div className="aboutTextBox aboutTextBox02">
                <p>What is this for?</p>
                <h1>Much <br /><span>Challenging</span></h1>
                <p className="aboutDescription">As a product designer, I believe in exploration, experience, iterate learning. For someone who has the same spirit as me, I want to share from my failed experiments to meaningful tries. You are not alone! Keep carry on.</p>
              </div>
            </div>
          </div>
          <div className="aboutTitle aboutTitle03">
            <div className="aboutTextImgBox">
              <div className="aboutImgBox">
                <img src={illust04} alt="Nerdy image"></img>
              </div>
              <div className="aboutTextBox">
                <p>What you can feel?</p>
                <h1>Very <span>Nerdy</span></h1>
                <p className="aboutDescription">If you felt a bit of fun in here, yes, we are like-minded people. Join my network! <a href="https://www.linkedin.com/in/cathydesigner/" target="_blank">  Visit my Linkedin ➜</a> </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
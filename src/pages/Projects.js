
/* Import image */
import failed01 from '../images/failed01.gif';
import flexwrap from '../images/feature_flexwrap.png';
import nft from '../images/feature_nft.png';
import paper from '../images/feature_paperprototype.png';
import lottie from '../images/feature_lottie.png';
import elevation from '../images/freature_elevation.png';
import micro from '../images/feature_micro.png';

export default function Projects() {
  return (

    <div className="container">
      <header className="App-header">
        <h3 className="projectIntro">As a product designer, I believe in exploration, experience, iterate learning. For someone who has the same spirit as me, I want to share from my failed experiments to meaningful tries. <p>You are not alone! Keep carry on.</p></h3>
      </header>

      {/* Ongoing Experiment*/}
      <h3 className="titleForCards">On Going Experiments 🤷🏻‍♀️</h3>
      <div className="cards">
        <div className="card card1">
          <img src={flexwrap} className="card-img-top" alt="CSS Grid Billboard"></img>
          <div className="card-body">
            <h5 className="card-title">CSS Grid Billboard</h5>
            <p className="card-text">Design personal billboard using CSS Grid.</p>
            <a className="btn btn-primary">See More</a>
          </div>
        </div>
        <div className="card card2">
          <img src={nft} className="card-img-top" alt="NFT Art"></img>
          <div className="card-body">
            <h5 className="card-title">NFT blockchain art</h5>
            <p className="card-text">Sell 3d motion graphic art in NFT blockchain market.</p>
            <a className="btn btn-primary">See More</a>
          </div>
        </div>
        <div className="card card3">
          <img src={paper} className="card-img-top" alt="Paper Prototype"></img>
          <div className="card-body">
            <h5 className="card-title">Paper prototype</h5>
            <p className="card-text">Make a simple paper prototype for mobile app</p>
            <a className="btn btn-primary">See More</a>
          </div>
        </div>
      </div>

      {/* Recent Experiment*/}
      <h3 className="titleForCards">Recent Experiments 🔍</h3>
      <div className="cards">
        <div className="card card1">
          <img src={lottie} className="card-img-top" alt="Lottie Logo Animation"></img>
          <div className="card-body">
            <h5 className="card-title">Lottie Logo animation</h5>
            <p className="card-text">Exporte logo animation to jzon file with Body movin plug in.</p>
            <a className="btn btn-primary">See More</a>
          </div>
        </div>
        <div className="card card2">
          <img src={elevation} className="card-img-top" alt="Shadow Elevation"></img>
          <div className="card-body">
            <h5 className="card-title">Shadow with Elevation</h5>
            <p className="card-text">Create Figma shadow component based on google meterial design - Elevation</p>
            <a className="btn btn-primary">See More</a>
          </div>
        </div>
        <div className="card card3">
          <img src={micro} className="card-img-top" alt="Micro Interaction"></img>
          <div className="card-body">
            <h5 className="card-title">Micro Interaction</h5>
            <p className="card-text">Some ideas of micro interaction for kids app.</p>
            <a className="btn btn-primary">See More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
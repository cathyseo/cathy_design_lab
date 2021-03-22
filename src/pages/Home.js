import '../App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/* Import image */
import flexwrap from '../images/feature_flexwrap.png';
import nft from '../images/feature_nft.png';
import paper from '../images/feature_paperprototype.png';
import lottie from '../images/feature_lottie.png';
import elevation from '../images/freature_elevation.png';
import micro from '../images/feature_micro.png';
import illust01 from '../images/illust01.png';

export default function Home() {
  return (
    <div className="container">
      <header className="App-header heroSection"> 
        <img src={illust01} alt="Girl image"></img>
        <div>
          <div className="title">
            <h1>Cathy <br />Design <br /><span>Lab</span></h1>
          </div>
          <p className="intro">Hi, I'm Cathy, here is my laboratory that showcases some of my design experiments covering interaction, front-end development, UI UX Design, even my hobby. Do you want to see my professional works?</p>
          <span className="callToAction"><a href="http://cathyseo.com/" target="_blank">Visit my official portfolio site ➜</a></span>
        </div>
      </header>

      {/* On goingExperiment*/}
      <h3 className="titleForCards">On Going Experiments 🤷🏻‍♀</h3>
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

      {/* Succeed Experiment*/}
      <h3 className="titleForCards">Recent Experiments 🔍</h3>
      <div className="cards">
        <div className="card card1">
          <img src={lottie} className="card-img-top" alt="Lottie Logo Animation"></img>
          <div className="card-body">
            <h5 className="card-title">Lottie Logo animation</h5>
            <p className="card-text">Export logo animation to JSON file with Bodymovin plug-in.</p>
            <a className="btn btn-primary">See More</a>
          </div>
        </div>
        <div className="card card2">
          <img src={elevation} className="card-img-top" alt="Shadow Elevation"></img>
          <div className="card-body">
            <h5 className="card-title">Shadow with Elevation</h5>
            <p className="card-text">Create Figma shadow component based on google material design - Elevation</p>
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
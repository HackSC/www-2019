import React from 'react';

import amplify from '../assets/sponsors/amplify.svg';
import facebook from '../assets/sponsors/facebook.svg';
import headspace from '../assets/sponsors/headspace.png';
import crowdstrike from '../assets/sponsors/crowdstrike.png';
import legalzoom from '../assets/sponsors/legalzoom.svg';
import omnisci from '../assets/sponsors/omnisci_block.svg';
import smartcar from '../assets/sponsors/smartcar.png';
import thetradedesk from '../assets/sponsors/thetradedesk.svg';
import gcp from '../assets/sponsors/gcp.png';
import viterbi from '../assets/sponsors/viterbi.svg';
import lavax from '../assets/sponsors/lavax.png';
import totle from '../assets/sponsors/totle.svg';
import polarr from '../assets/sponsors/polarr.svg';
import honey from '../assets/sponsors/honey.svg';

import '../styles/sponsors.scss';

export default props => (
  <div className="sponsors-gallery">
    <div className="top-tier">
      <a href="//facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="Facebook" className="sponsor top" />
      </a>

      <a href="//thetradedesk.com" target="_blank" rel="noopener noreferrer">
        <img src={thetradedesk} alt="theTradeDesk" className="sponsor top" />
      </a>

      <a href="//omnisci.com" target="_blank" rel="noopener noreferrer">
        <img src={omnisci} alt="OmniSci" className="sponsor top" />
      </a>
      <a href="//totle.com" target="_blank" rel="noopener noreferrer">
        <img src={totle} alt="Totle" className="sponsor top" />
      </a>
    </div>

    <div className="mid-tier">
      <a href="//headspace.com" target="_blank" rel="noopener noreferrer">
        <img src={headspace} alt="Headspace" className="sponsor mid" />
      </a>

      <a href="//polarr.com" target="_blank" rel="noopener noreferrer">
        <img src={polarr} alt="Polarr" className="sponsor mid" />
      </a>

      <a href="//crowdstrike.com" target="_blank" rel="noopener noreferrer">
        <img src={crowdstrike} alt="Crowdstrike" className="sponsor mid" />
      </a>

      <a href="//www.legalzoom.com" target="_blank" rel="noopener noreferrer">
        <img src={legalzoom} alt="LegalZoom" className="sponsor mid" />
      </a>

      <a href="//joinhoney.com" target="_blank" rel="noopener noreferrer">
        <img src={honey} alt="Honey" className="sponsor mid" />
      </a>

      <a href="//smartcar.com" target="_blank" rel="noopener noreferrer">
        <img src={smartcar} alt="SmartCar" className="sponsor mid" />
      </a>
    </div>

    <div className="bottom-tier">
      <a href="//amplifyla.com" target="_blank" rel="noopener noreferrer">
        <img src={amplify} alt="Amplify LA" className="sponsor bottom" />
      </a>

      <a href="//cloud.google.com" target="_blank" rel="noopener noreferrer">
        <img src={gcp} alt="Google Cloud Platform" className="sponsor bottom" />
      </a>

      <a
        href="//viterbischool.usc.edu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={viterbi}
          alt="USC Viterbi School of Engineering"
          className="sponsor bottom"
        />
      </a>

      <a href="//usclavax.com" target="_blank" rel="noopener noreferrer">
        <img src={lavax} alt="LavaX" className="sponsor bottom" />
      </a>
    </div>
  </div>
);

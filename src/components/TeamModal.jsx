import React from "react"

import "../styles/teamModal.scss";

import TeamMember from './TeamMember';

export default (props) => {
  const modalClass = (props.isActive) ? 'modal is-active' : 'modal'

  return (
    <div className={modalClass}>
      <div className="modal-background" onClick={props.hideModal}></div>

      <div className="modal-content">
        <div className="box team-modal">
          <h1>Our Team</h1>

          <h2>E-Board</h2>

          <div className="columns is-multiline is-centered">
            <TeamMember
              pic="/team/stiven.jpg"
              name="Stiven Deleur"
              title="Executive Director"
              link="http://stiven.me"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/jack.jpg"
              name="Jack Zeiders"
              title="Executive Director"
              link="https://www.linkedin.com/in/john-zeiders/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/caleb.JPG"
              name="Caleb Thomas"
              title="Lead Director of Sponsorship"
              link="https://www.linkedin.com/in/thomascaleb/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/sam.jpg"
              name="Sam Kushell"
              title="Lead Director of Hacker Experience"
              link="https://www.linkedin.com/in/samkushell/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/willie.jpg"
              name="Wilhelm Willie"
              title="Lead Director of Technology"
              link="http://wilhelmwillie.com"
              colClass="is-one-quarter"
            />
          </div>

          <h2>Logistics</h2>

          <div className="columns is-multiline is-centered">
            <TeamMember
              pic="/team/anjan.JPG"
              name="Anjan Amarnath"
              title="Lead Director of Logistics"
              link="https://www.linkedin.com/in/anjan-amarnath/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/lauralee.jpg"
              name="Lauralee Harper"
              title="Director of Logistics"
              link="https://linkedin.com/in/lauraleeharper/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/anushka.jpg"
              name="Anushka Srivastava"
              title="Director of Logistics"
              link="https://linkedin.com/in/anushkasrivastava/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/jane.jpg"
              name="Jane Wang"
              title="Director of Logistics"
              link="https://linkedin.com/in/janelianwang/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/willie.jpg"
              name="Wilhelm Willie"
              title="Lead Director of Technology"
              link="http://wilhelmwillie.com"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/daniel.jpg"
              name="Daniel Ho"
              title="Director of Technology"
              link="http://donutdaniel.github.io"
              colClass="is-one-quarter"
            />
          </div>

          <h2>Hacker Experience</h2>
          <div className="columns is-multiline is-centered">
            <TeamMember
              pic="/team/sam.jpg"
              name="Sam Kushell"
              title="Lead Director of Hacker Experience"
              link="https://www.linkedin.com/in/samkushell/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/andreas.jpeg"
              name="Andreas Bigger"
              title="Director of Hacker Experience"
              link="https://abigger87.github.io/AndreasBigger/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/michelle.jpg"
              name="Michelle Renee Sacks"
              title="Director of Hacker Experience"
              link="https://www.linkedin.com/in/michelle-sacks/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/arielle.jpg"
              name="Arielle Smith"
              title="External Relations Advisor"
              link="https://www.linkedin.com/in/ariellewsmith/detail/photo/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/katie.jpg"
              name="Katherine Wong"
              title="Director of Hacker Experience"
              link="https://www.linkedin.com/in/katherine-wong-04938216b"
              colClass="is-one-quarter"
            />
          </div>

          <h2>Sponsorship</h2>
          <div className="columns is-multiline is-centered">
            <TeamMember
              pic="/team/caleb.JPG"
              name="Caleb Thomas"
              title="Lead Director of Sponsorship"
              link="https://www.linkedin.com/in/thomascaleb/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/emily.jpeg"
              name="Emily Liu"
              title="Director of Sponsorship"
              link="https://www.linkedin.com/in/emily-liu-a5aa05129/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/sakura.jpg"
              name="Sakura Rapolu"
              title="Director of Sponsorship"
              link="https://www.instagram.com/sakurawrr/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/ralph.jpg"
              name="Ralph Sun"
              title="Director of Sponsorship"
              link="https://www.linkedin.com/in/ralphsun/"
              colClass="is-one-quarter"
            />
          </div>

          <h2>Marketing</h2>
          <div className="columns is-multiline is-centered">
            <TeamMember
              pic="/team/diya.JPG"
              name="Diya Mehta"
              title="Lead Director of Marketing"
              link="https://www.linkedin.com/in/diyamehta/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/jenny.jpg"
              name="Jenny Chung"
              title="Lead Director of Design"
              link="http://chungjenny.com"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/fedja.jpeg"
              name="Fedja Čelebić"
              title="Director of Marketing"
              link="https://www.linkedin.com/in/fedja-celebic-413820149/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/benton.JPG"
              name="Benton Yee"
              title="Director of Marketing"
              link="https://www.linkedin.com/in/bentonyee/"
              colClass="is-one-quarter"
            />
          </div>

          <h2>Special Projects</h2>
          <div className="columns is-multiline is-centered">
            <TeamMember
              pic="/team/devika.png"
              name="Devika Kumar"
              title="Lead Director of Special Projects"
              link="https://www.linkedin.com/in/devika-kumar-69b880142/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/maggie.jpg"
              name="Margaret Bowen"
              title="Director of Special Projects"
              link="https://www.youtube.com/channel/UCEHpVkS-p87QMtJgOgDdItQ"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/forrest.jpg"
              name="Forrest Dunlap"
              title="Director of Special Projects"
              link="https://www.linkedin.com/in/forrest-dunlap/"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/alex.jpg"
              name="Alexander Kuo"
              title="Director of Special Projects"
              link="https://www.linkedin.com/in/alexkuo98"
              colClass="is-one-quarter"
            />
          </div>

          <h2>Former Organizers (2017-2018)</h2>
          <div className="columns is-multiline is-centered">
            <TeamMember
              pic="/team/sampurna.jpg"
              name="Sampurna Basu"
              title="President (2017)"
              link="https://www.linkedin.com/in/sampurnabasu"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/anant.jpeg"
              name="Anant Jain"
              title="President (2018)"
              link="https://anantjain.io"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/rachit.jpg"
              name="Rachit Kataria"
              title="Lead Director of Logistics"
              link="http://rachitkataria.me"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/ankur.jpg"
              name="Ankur Rastogi"
              title="Lead Director of Logistics"
              link="http://ankurrastogi.me"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/kelly.jpeg"
              name="Kelly Lampotang"
              title="Lead Director of Marketing and Outreach"
              link="https://klampotang.weebly.com"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/jonluca.jpg"
              name="JonLuca De Caro"
              title="Lead Director of Marketing and Outreach"
              link="https://jonlu.ca"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/pavan.jpg"
              name="Pavan Shah"
              title="Lead Director of Sponsorship"
              link="https://www.linkedin.com/in/pavanshah1"
              colClass="is-one-quarter"
            />

            <TeamMember
              pic="/team/andrew.jpg"
              name="Andrew Jiang"
              title="Lead Director of Branding"
              link="http://andrewjiang.com"
              colClass="is-one-quarter"
            />
          </div>
        </div>
      </div>

     <button className="modal-close is-large" aria-label="close" onClick={props.hideModal}></button>
    </div>
  )
}

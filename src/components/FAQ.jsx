import React from "react"

import Question from './Question';

export default (props) => (
  <div className="columns">
    <div className="column">
      <Question
        question="Why HackSC?"
        answer="We break the hackathon mold – for us, this means pushing the boundaries of creation past just app development and tech. We take an interdisciplinary approach to tech, admitting people talented not only in computer science, but also in design, product, and more."
      />

      <Question
        question="Who can attend?"
        answer="Any college student, undergraduate or graduate, can apply! Regardless of your major, experience, or any other factor, we invite you to apply to HackSC."
      />

      <Question
        question="Are there travel reimbursements?"
        answer="Hope you like bus rides! We are sending buses throughout the state of California. Details to be finalized."
      />

      <Question
        question="What if my question isn't here?"
        answer={(<span>You can message and/or email us your questions! Feel free to reach out to us at <a href='mailto:hackers@hacksc.com'>hackers@hacksc.com</a> or on social media!</span>)}
      />
    </div>

    <div className="column">
      <Question
        question="What should I bring?"
        answer="All hackers must bring a valid government ID for admission (the name on the ID must match that on your HackSC application). Definitely bring your laptop, charger, and any hackathon gear you may need for your creation. We also strongly recommend bringing a sleeping bag and toiletries for when you need to rest and wash up. One more way HackSC differs from other hackathons is that we are great at hygiene."
      />

      <Question
        question="Does it cost anything?"
        answer="Nope! Admission is free for all hackers, which includes food and drinks. The only cost you might have to consider is transportation."
      />

      <Question
        question="How do teams work?"
        answer="HackSC allows teams up to 4 people. If you don't have a team prior to the hackathon, that's 100% OK; we will have plenty of team-matching events for you to find the perfect group! You can also work alone, if that floats your boat."
      />
    </div>
  </div>
)

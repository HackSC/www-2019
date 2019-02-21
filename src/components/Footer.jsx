import '../styles/footer.scss'

import React from "react"

import Modal from "./PrivacyPolicyModal"

class Footer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    }
  }

  showModal = () => {
    this.setState({
      showModal: true
    })
    document.querySelector('html').classList.add('no-scroll');
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
    document.querySelector('html').classList.remove('no-scroll');
  }

  render(){
    return(
      <footer className="footer has-text-centered">
        <p>&copy; HackSC 2019</p>
        <br/>
        <p class="fake-link" onClick={this.showModal}>Privacy Policy</p>

        <a className="fake-link" href="https://mlh.io/code-of-conduct">MLH Code of Conduct</a>
        
        <Modal isActive={this.state.showModal} hideModal={this.hideModal}/>
      </footer>
    )
  }

}


export default Footer

import React from "react";
import "./WelcomePage.scss";
import Modal from "../Components/Modal/Modal";

export default class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
  }


toggalModal = () => {
  this.setState({
    isOpen: !this.state.isOpen
  });
};


  render () {
  return (
      <section className="main">
          <div className="main-container">
          <div className="main-title">Buying wine can be overwhelming, due to the variety of wines on the shelves.  
              The Che Vino helps take the guess work out of making that decision.  
              Chi Vino determines a bottle of wine at random.  You have the choice of the different types of wine avaiable, such as Red, White, Dessert, Port, Rose, or Sparkling Wine.
              Enjoy, and remember to drink responsible!
           </div>
          </div>
     

    <section className="card">
      <div className="card-wrapper">
        <button className="card-button modal-button" onClick={this.toggalModal}>Wines</button>
        <Modal 
        show={this.state.isOpen}
        onClose={this.toggalModal}
        />
      </div>
    </section>
    </section>
  );
}
}

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
              Che Vino determines a bottle of wine at random. You have the choice of the different types of wine avaiable, such as Red, White, Dessert, Port, Rose, or Sparkling Wine. Checkout the seach page that shows
              the top 20 wines.  There you can read comments about the wine, see the wine score, and the average price.
              Enjoy, and remember to drink responsible!
           </div>
          </div>
     

    <section className="card">
      <div className="card-wrapper">
        <button className="card-button modal-button" onClick={this.toggalModal}>Wine Lists</button>
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

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import DessertWinePage from './pages/DessertWinePage';
import PortWinePage from './pages/PortWinePage';
import RedWinePage from './pages/RedWinePage';
import RoseWinePage from './pages/RoseWinePage';
import WhiteWinePage from './pages/WhiteWinePage';
import SparklingWinePage from './pages/SparkingWinePage';
// import WelcomePage from './pages/WelcomePage';
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import ContactPage from './pages/ContactPage';
import ReviewPage from './pages/ReviewPage';
import Reviews from './Components/Reviews/Reviews';
import Review from './Components/Review/Review';

function App() {
  return (
    <div className="App">
    <Router >
      <Header />
     <Switch >
      <Route path="/" exact component={HomePage}/>
      <Route path="/search" exact component={SearchPage}/>
      <Route path="/contact" exact component={ContactPage}/>
      <Route path="/reviews" exact component={ReviewPage}/>
      <Route path='/leave_review/:id' exact component={Review}/>
      <Route path="/reviews/:id" component={Reviews}/>
      <Route path="/wines/reds" exact component={RedWinePage}/>
      <Route path="/wines/whites" exact component={WhiteWinePage}/>
      <Route path="/wines/dessert" exact component={DessertWinePage}/>
      <Route path="/wines/port" exact component={PortWinePage}/>
      <Route path="/wines/rose"exact component={RoseWinePage}/>
      <Route path="/wines/sparkling" exact component={SparklingWinePage}/>
    </Switch>
    <Footer />
    </Router> 
    </div>
  );
}

export default App;

import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import DessertWinePage from './pages/DessertWinePage';
import PortWinePage from './pages/PortWinePage';
import RedWinePage from './pages/RedWinePage';
import RoseWinePage from './pages/RoseWinePage';
import WhiteWinePage from './pages/WhiteWinePage';
import SparklingWinePage from './pages/SparkingWinePage';
import WelcomePage from './pages/WelcomePage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from './pages/SearchPage';
import ContactPage from './pages/ContactPage';


function App() {
  return (
    <div className="App">
      {/* <SearchPage /> */}
    <Router >
      <Header />
     <Switch >
      <Route path="/" exact component={WelcomePage}/>
      <Route path="/search" exact component={SearchPage}/>
      <Route path="/contact" exact component={ContactPage}/>
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

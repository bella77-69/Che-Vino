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


function App() {
  return (
    <div className="App">
    <Router >
      {/* <Header /> */}
    <Switch >
      <Route path="/" exact component={WelcomePage}/>
      <Route path="/wines/reds" component={RedWinePage}/>
      <Route path="/wines/whites" component={WhiteWinePage}/>
      <Route path="/wines/dessert" component={DessertWinePage}/>
      <Route path="/wines/port" exact component={PortWinePage}/>
      <Route path="/wines/rose"exact component={RoseWinePage}/>
      <Route path="/wines/sparkling" exact component={SparklingWinePage}/>
     

{/* <WelcomePage /> */}
{/* <RedWinePage /> */}
{/* <WhiteWinePage /> */}
{/* <DessertWinePage /> */}
{/* <PortWinePage /> */}
{/* <SparklingWinePage /> */}
{/* <RoseWinePage /> */}
 
  
    </Switch>
    <Footer />
    </Router>
    </div>
  );
}

export default App;

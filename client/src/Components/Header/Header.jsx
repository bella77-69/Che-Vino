import wine from "../../assets/images/banner-1.jpg";

export default function Header() {
    return (
      <div className="App">
        <h1 className="title">Che Vino?</h1>
        <img src={wine} alt="wine"/>
        <p className="quotes">A web application to help choose your next bottle of wine</p>
        <p className="author">Chantelle Mckenzie</p>
        <button className="button">Enter</button>

      </div>
    );
  }
import axios from "axios";
import React from "react";

export default class SparklingWinePage extends React.Component {
constructor(props){
    super(props);
    this.state ={
        items: [],
    }
    this.toggleContent = this.toggleContent.bind(this)
}

    //lifecycle
    componentDidMount() {
        this.fetchWine();
       }

fetchWine = () => {
    axios.get('http://localhost:8080/wines/sparkling')
    .then((response) => {
        this.setState ({
            items: response.data,
        })
        console.log(response.data)
    })
    .catch((error) => {
    console.log(error)
    });
}

toggleContent(event) {
    event.preventDefault();
    this.fetchWine();
    console.log(this.props)
    }

render () {
    const { items } =this.state;
    return (
    <div>
        <ul>{items.map(item => (
            <li key={item.id}> 
            <img src={item.image} alt="wine-img"/>
            <h3 className="wine-title">{item.wine}
            </h3>
            <p className ="wine-info">{item.winery}</p>
            <p className="wine-location">{item.location}</p>
            <p className="wine-rating">{item.rating.average}</p>
            <p className="wine-review">{item.rating.reviews}</p>
            <button className="button" onClick={this.toggleContent}>
                 <span>WINE GENERATOR</span>
         </button>
            </li>
        ))};
        </ul>
</div>
    );
}
}

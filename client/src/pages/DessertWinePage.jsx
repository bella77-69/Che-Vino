import axios from "axios";
import React from "react";

export default class DessertWinePage extends React.Component {
constructor(props){
    super(props);
    this.state ={
        items: [],
        activeItems: []
    }
    this.toggleContent = this.toggleContent.bind(this)
}

    //lifecycle
    componentDidMount() {
        this.fetchWine();
       }

fetchWine = () => {
    axios.get('http://localhost:8080/wines/dessert')
    .then((response) => {
        this.setState ({
            items: response.data,
            activeItems: response.data[0]
        })
        console.log(response.data)
    })
    .catch((error) => {
    console.log(error)
    });
}
getWineById(id) {
    axios
      .get(`http://localhost:8080/wines/dessert/${id}`)
      .then((response) => {
        console.log("message:", response.data);
        this.setState({
         activeItems: response.data,
        });
      })
      .then((response) => {
        console.log(this.state.activeItems);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    const {id} = this.props.match.params
    console.log("In component did update:", id);
    if (id) {
      if (prevState.activeItems && prevState.activeItems.id !== id) {
        this.getWineById(id);
      }
    }
  }

toggleContent(event) {
    event.preventDefault();
    this.fetchWine();
    console.log(this.props)
    }
    

render () {
    const { items, activeItems } =this.state
    console.log(activeItems)
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

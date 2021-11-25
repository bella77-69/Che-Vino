import React from "react"
import axios from "axios";


export default class WinePage extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        wines: [],
        loading: true,
        image: []
       
    }
    this.titleWasClicked = this.titleWasClicked.bind(this)
    this.toggleContent = this.toggleContent.bind(this)
    }

    //lifecycle
    componentDidMount() {
     this.fetchWine();
    }

    //method to fetch data from api
    fetchWine = () => {
        axios.get('http://localhost:8080/wines/')
        .then((response) => {
            this.setState ({
                wines: response.data,
                image: response.data[0]
            })
            const { wine } = response.data;
            this.setState({wine});
            console.log(response.data)
        })
        .catch((error) => {
        console.log(error)
        });
    }

titleWasClicked(event) {
event.preventDefault();
const {dataCallBack} = this.props
this.fetchWine();
console.log(this.props)
}

toggleContent(event) {
    event.preventDefault();
    const id = event.target.value
}


render() {
    const {wines} = this.state;
    const showContent = true;
  
    return (
        <div>
            <ul>
                {wines.map(wine => (
                    
                    <li key={wine.id}>
                        <h1 onClick={this.titleWasClicked}>{wines.winery}</h1>
                        <img src={wine.image} alt="wine-img"/>
                        {wine.wine} | {wine.winery}
                           <button className="button" onClick={this.toggleContent}>
                            <span>WINE GENERATOR</span>
                            </button>
                            </li>
                ))}
            </ul>
        </div>
    )


    // return (
    //     <div>{wines.filter(wine => wine.id).map(filterWine => {
    //         <li>{filterWine.image}</li>
    //     })}
    //     <div key={wines}>
    //     <h1 onClick={this.titleWasClicked}>{wines.winery}</h1>
    //     <img src={wines.image} alt="wine-img"/>
    //     <h1 className ="heading">{wines.location}</h1>
    //     {showContent === true ? <p>{wines.wine}</p> : " "}
    //     <button className="button" onClick={this.toggleContent}>
    //         <span>WINE GENERATOR</span>
    //     </button>
    //     </div>
    //     </div>
    // )
}
}





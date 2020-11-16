import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList'; //.js is assumed in react
import SearchBar from '../SearchBar/SearchBar.js'; //.js is manually coded in
import { Yelp } from "../../util/Yelp.js";
import logo from './logo.svg';

/*
//removing the hard coding, json code from response in yelp.js will be new business lists

let business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'Gwen Likes Pizza <3',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

let businesses = [business, business, business, business, business, business];
*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }

    this.searchYelp = this.searchYelp.bind(this);
  }


  searchYelp(term, location, sortBy) {
    //console.log("Searching Yelp with " + {term} + ", " + {location} + ", " + {sortBy});
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState( {businesses: businesses} );
    });
  }  

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
  
    );
  }
  
}

export default App;

import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from "../BusinessList/BusinessList";
import Yelp from '../../util/yelp';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			businesses: []
		};

		this.searchYelp = this.searchYelp.bind(this);
	}

	searchYelp(term, location, sortBy) {
		Yelp.searchYelp(term, location, sortBy).then((businesses) => {
			console.log('Found ' + businesses.length + ' businesses');
			this.setState({ businesses: businesses });
		});
	}

	render() {
		return (
			<div className="App">
				<h1>mehungry</h1>
				<SearchBar searchYelp={this.searchYelp} />
				<BusinessList businesses={this.state.businesses} />
			</div>
		);

	}

}

export default App;
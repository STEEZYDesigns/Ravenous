import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: "", // from search bar
            location: "", //from search bar
            sortBy: "best_match" //from selected option, object sortByOptions, string/key
                //default option of sortBy: "best_match"
        }

        this.sortByOptions = {
            "Best Match": "best_match",
            "Highest Rated": "rating",
            "Most Reviewed": "review_count"
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTermChange(event) { //Businesses / general term input
        this.setState({term: event.target.value});
    }

    handleLocationChange(event) { //Where input
        this.setState({location: event.target.value});
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    getSortByClass(sortByOption) {

        if (this.state.sortBy === sortByOption) {
            return "active"; //used to "ask" if the sortBy is the one clicked on
            //returns the current CSS class for a sorting option
            //className of each list item in SearchBar
        }

        return "";
    }

    handleSortByChange(sortByOption) {
        this.setState({sortBy: sortByOption});
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {

            let sortByOptionValue = this.sortByOptions[sortByOption];

            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} 
            onClick={this.handleSortByChange.bind(this, sortByOptionValue)}> 
                {sortByOption} </li>
            }
        );
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>

                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>

                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;

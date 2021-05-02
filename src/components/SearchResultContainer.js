import React, { Component } from "react";
// import Search from "./Search";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        results: [],
    };

    componentDidMount() {
        this.searchPeople();
    }
    styles = {
        input: {
            width: "200px",
            border: "none",
        },
    };

    searchPeople = () => {
        API.search()
            .then((res) => this.setState({ results: res.data.results }))
            .then(() => console.log(this.state.results))
            .catch((error) => {
                console.log(error);
            });
    };


}

export default SearchResultContainer;
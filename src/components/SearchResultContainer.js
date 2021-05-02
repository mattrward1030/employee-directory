import React, { Component } from "react";
import ResultList from "./ResultList";
import Search from "./Search";
import API from "../utils/API";

class SearchResultContainer extends Component {
    constructor() {
        super();

        this.state = {
            search: "",
            results: []
        };
    }


    searchSpace = (evt) => {
        let keyword = evt.target.value;
        this.setState({ search: keyword })
    }

    componentDidMount() {
        this.searchUser();
    }

    searchUser = () => {
        API.search()
            .then((res) => this.setState({ results: res.data.results }))
            .then(() => console.log(this.state.results))
            .catch((error) => {
                console.log(error);
            });
    };

    render() {

        return (
            <div>
                <Search
                    search={this.searchSpace}
                />
                <table className="table table-striped table-hover table-light">
                    <thead className="thead-dark">
                        <tr>
                            <th className="text-center scope=col">
                                Image
                      </th>
                            <th className="text-center scope=col">
                                Name
                      </th>
                            <th className="text-center scope=col">
                                Phone
                      </th>
                            <th className="text-center scope=col">
                                Email
                      </th>
                            <th className="text-center scope=col">
                                Date Of Birth
                      </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.results.filter((item) => {
                            if (this.state.search === "")
                                return item;
                            else if (item.name.first.toLowerCase().includes(this.state.search.toLowerCase()) || item.name.last.toLowerCase().includes(this.state.search.toLowerCase())) {
                                return item;
                            }
                            return false;
                        })
                            .map(item => {
                                return (
                                    <ResultList
                                        picture={item.picture.medium}
                                        first={item.name.first}
                                        last={item.name.last}
                                        phone={item.phone}
                                        email={item.email}
                                        dateOfBirth={item.dob.date}
                                    />
                                );
                            })}

                    </tbody>
                </table>
            </div >
        );
    }
}

export default SearchResultContainer;


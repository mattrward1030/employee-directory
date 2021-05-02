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

    searchPeople = () => {
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
                        {this.state.results.map((item) => {
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
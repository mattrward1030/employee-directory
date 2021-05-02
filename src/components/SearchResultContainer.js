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

    // sort by name
    sortName() {
        this.setState({
            results: this.state.results.sort((a, b) => {
                let nameA = a.name.first.toUpperCase();
                let nameB = b.name.first.toUpperCase();
                if (nameA < nameB) {
                    return -1
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;

            })
        })
    }

    sortPhone() {
        this.setState({
            results: this.state.results.sort((a, b) => {
                let phoneA = a.phone;
                let phoneB = b.phone;
                if (phoneA < phoneB) {
                    return -1
                }
                if (phoneA > phoneB) {
                    return 1;
                }
                return 0;

            })
        })
    }

    sortEmail() {
        this.setState({
            results: this.state.results.sort((a, b) => {
                let emailA = a.email;
                let emailB = b.email;
                if (emailA < emailB) {
                    return -1
                }
                if (emailA > emailB) {
                    return 1;
                }
                return 0;

            })
        })
    }

    sortDob() {
        this.setState({
            results: this.state.results.sort((a, b) => {
                let dobA = a.dob.date;
                let dobB = b.dob.date;
                if (dobA < dobB) {
                    return -1
                }
                if (dobA > dobB) {
                    return 1;
                }
                return 0;

            })
        })
    }




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
                                <i className="fa fa-caret-down p-2" onClick={() => this.sortName()}></i>
                            </th>
                            <th className="text-center scope=col">
                                Phone
                                <i className="fa fa-caret-down p-2" onClick={() => this.sortPhone()}></i>
                            </th>
                            <th className="text-center scope=col">
                                Email
                                <i className="fa fa-caret-down p-2" onClick={() => this.sortEmail()}></i>
                            </th>
                            <th className="text-center scope=col">
                                Date Of Birth
                                <i className="fa fa-caret-down p-2" onClick={() => this.sortDob()}></i>
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
                                let dobArr = item.dob.date.slice(0, -14).split("-");
                                let newDOB = `${dobArr[1]}-${dobArr[2]}-${dobArr[0]}`;
                                return (
                                    <ResultList
                                        picture={item.picture.medium}
                                        first={item.name.first}
                                        last={item.name.last}
                                        phone={item.phone}
                                        email={item.email}
                                        dateOfBirth={newDOB}
                                    />
                                );
                            })}

                    </tbody>
                </table >
            </div >
        );
    }
}

export default SearchResultContainer;


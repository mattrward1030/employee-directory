import React, { Component } from "react";
// import Search from "./Search";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {

    constructor() {
        super();

        this.state = {
            search: null
        };
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
    }

    componentDidMount() {
        this.searchPeople();
    }

    searchPeople = () => {
        API.search()
            .then((res) => this.setState({ results: res.item.results }))
            .then(() => console.log(this.state.results))
            .catch((error) => {
                console.log(error);
            });
    };

    render() {

        const items = API.filter((item) => {
            if (this.state.search == null)
                return item
            else if (item.name.first.toLowerCase().includes(this.state.search.toLowerCase()) || item.name.last.toLowerCase().includes(this.state.search.toLowerCase())) {
                return item
            }
        }).map(item => {



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

                        </tbody>
                    </table>
                </div >
            );
        })
        return (
            <div>
                <input type="text" placeholder="Enter item to be searched" onChange={(e) => this.searchSpace(e)} />
                {items}
            </div>
        )
    }
}

export default SearchResultContainer;



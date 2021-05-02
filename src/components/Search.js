import React from "react";


const styles = {
    form: {
        background: "#b9b0b0c5",
        display: "flex",
        justifyContent: "center",
    },

    input: {
        width: "75%",
        textAlign: "center",
        margin: "10px"
    }

};
function Search(props) {
    return (
        <form style={styles.form}>
            <div >
                <input style={styles.input}
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    id="search"
                />
            </div>
        </form>
    );

}


export default Search;
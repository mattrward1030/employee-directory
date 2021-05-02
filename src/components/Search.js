import React from "react";


const styles = {
    form: {
        background: "#b9b0b0c5",
        display: "flex",
        justifyContent: "center",
        padding: "15px"
    },

    input: {
        width: "20%",
        textAlign: "center",
    }
}


function Search() {

    return (
        <form action="" >
            <div style={styles.form} >
                <input
                    onChange={(evt) => this.searchSpace(evt)}
                    style={styles.input}
                    type="text"
                    placeholder="Search Employees"
                />
            </div>
        </form>
    )
}

export default Search;
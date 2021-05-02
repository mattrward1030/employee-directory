import React from "react";

function ResultList(props) {
    return (
        <tr>
            <td className="text-center">
                <img src={props.picture} alt="profile" />
            </td>
            <td className="text-center align-middle">
                {props.first} {props.last}
            </td>
            <td className="text-center align-middle">
                {props.phone}
            </td>
            <td className="text-center align-middle">
                <a href="mailto:someone@yoursite.com">{props.email}</a>
            </td>
            <td className="text-center align-middle">
                {props.dateOfBirth}
            </td>
        </tr>
    )
}

export default ResultList;
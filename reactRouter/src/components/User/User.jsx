// Creating route
// Any confusion see 6:56 timestamp part1 chai-aur-react

import React from "react";
import { useParams } from "react-router-dom";

export default function User(){
    const {userid} = useParams()
    return(
        <h1 className="text-3xl">User: {userid} </h1>
    )
}


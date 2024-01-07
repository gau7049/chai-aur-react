import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
// Optimized technique of useLoader technique what it does ?
// When move hover then it will start to fetch and keep it into cache so it optimize overall performance

export default function Github(){

    const data = useLoaderData()

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/gau7049')
    //     .then((res) => res.json())
    //     .then((res) => setData(res))
    // }, [])
    return(
        <>
        <h1 className="text-center m-4 bg-orange-50 p-4 text-3xl">GitHUb followers: {data.followers}</h1>
        <img className="rounded ml-60" src={data.avatar_url} alt="" width={300} />
        </>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/gau7049')
    return response.json()  
}
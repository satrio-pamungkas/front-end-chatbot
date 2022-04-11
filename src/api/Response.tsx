import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (msg: string) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.post('http://localhost:8000/', {
            message: msg
        })
        .then((response) => {
            console.log(response.data);
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

    return {data}
}
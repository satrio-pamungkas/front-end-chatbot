import { useState, useEffect} from "react";
import axios from "axios";

export const useFetch = (msg: string = '') => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:8000/', {
            message: msg
        })
        .then((response) => {
            setItems(response.data.data.message);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [msg])

    return { items };
}
import { useState, useEffect} from "react";
import axios from "axios";

export const useFetch = (msg: string = '') => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:8000/', {
            message: msg
        })
        .then((response) => {
            const value: any = response.data.responseId + response.data.data.message;
            setItems(value);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [msg])

    return { items };
}
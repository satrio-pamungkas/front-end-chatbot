import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useFetch } from "../api/Response";

const chatList: any = [];
const responseList: any = [];

export const Chatbot = () => {
    const [userMessage, setUserMessage] = useState('');
    const [realMessage, setRealMessage] = useState('');
    const [listResponse, setListResponse] = useState(responseList);
    const [listMessage, setListMessage] = useState(chatList);
    const { items } = useFetch(realMessage);

    const handleChange = (e: any) => {
        setUserMessage(e.target.value);
    }

    const handleSubmit = () => {
        const newList = listMessage.concat({ id: uuidv4(), message: userMessage });
        setListMessage(newList);
        addResponseList();
    }

    const addResponseList = () => {
        const newList = listResponse.concat({ id: uuidv4(), message: items });
        setListResponse(newList);
        console.log(newList);
    }

    useEffect(() => {
        setRealMessage(userMessage);
    }, [userMessage])

    return (
        <>
            <div className="relative w-full p-6 overflow-y-auto h-[25rem]">
                <ul className="space-y-2">
                    {listMessage.map((item: any) => (
                        <li key={item.id} className="flex justify-end">
                            <div className="relative max-w-md px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                <span className="block">{item.message}</span>
                            </div>
                        </li>
                    ))}
                    {listResponse.map((item: any) => (
                        <li key={item.id} className="flex justify-start">
                            <div className="relative max-w-md px-4 py-2 text-gray-700 rounded shadow">
                                <span className="block">{item.message}</span>
                            </div>
                        </li> 
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                <input type="text" placeholder="Ketik Pesan" value={userMessage} onChange={handleChange}
                    className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                    name="message" required />
                <button type="submit" onClick={handleSubmit}>
                    <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </button>
            </div>
        </>
    );
}
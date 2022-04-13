import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useFetch } from "../api/useFetch";

const chatList: any = [];

const style = [
    {
        li: 'flex justify-start',
        div: 'relative max-w-md px-4 py-2 text-gray-700 rounded shadow'
    },
    {
        li: 'flex justify-end',
        div: 'relative max-w-md px-4 py-2 text-gray-700 bg-gray-100 rounded shadow'
    }
];

export const Chatbot = () => {
    const [userMessage, setUserMessage] = useState('');
    const [realMessage, setRealMessage] = useState('intro');
    const [listMessage, setListMessage] = useState(chatList);
    const { items } = useFetch(realMessage);
    const scrollRef: any = useRef(null);

    const handleChange = (e: any) => {
        setUserMessage(e.target.value);
    }

    const handleSubmit = () => {
        if (userMessage === realMessage) {
            setRealMessage(userMessage + " ");
            // to make changes and trigger the hooks
        } else {
            setRealMessage(userMessage);
        }

        const newList = listMessage.concat({ 
            id: uuidv4(), 
            message: userMessage, 
            li: style[1].li, 
            div: style[1].div });

        setListMessage(newList);
        setUserMessage('');
    }

    useEffect(() => {
        const value: string = items.toString();
        const data: any = value.split("/");
        const newList = listMessage.concat({ 
            id: uuidv4(), 
            message: data[1],
            li: style[0].li, 
            div: style[0].div });

        setListMessage(newList);
    }, [items]);

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behaviour: 'smooth' });
    })

    return (
        <>
            <div className="relative w-full p-6 overflow-y-scroll h-[25rem]">
                <ul className="space-y-2">
                    {listMessage.map((item: any) => (
                        <li key={item.id} className={item.li}>
                            <div className={item.div}>
                                <span className="block">{item.message}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <div ref={scrollRef}/>
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
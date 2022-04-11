import React from "react";

export const App = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-2xl">
                <h1 className="font-sans font-bold text-3xl text-center text-blue-500 mb-4 mt-4">
                    ChatBot Sederhana
                </h1>
                <div className="border rounded">
                    <div className="w-full">
                        <div className="relative flex items-center p-3 border-b border-gray-300">
                            <img className="object-cover w-10 h-10 rounded-full"
                                src="https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=You" alt="username" />
                            <span className="block ml-2 font-bold text-gray-600">Anda</span>
                            <span className="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
                            </span>
                        </div>
                        <div className="relative w-full p-6 overflow-y-auto h-[25rem]">
                            <ul className="space-y-2">
                                <li className="flex justify-start">
                                <div className="relative max-w-md px-4 py-2 text-gray-700 rounded shadow">
                                    <span className="block">Hi</span>
                                </div>
                                </li>
                                <li className="flex justify-end">
                                <div className="relative max-w-md px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                    <span className="block">Hiiii</span>
                                </div>
                                </li>
                                <li className="flex justify-end">
                                <div className="relative max-w-md px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                                    <span className="block">how are you?</span>
                                </div>
                                </li>
                                <li className="flex justify-start">
                                <div className="relative max-w-md px-4 py-2 text-gray-700 rounded shadow">
                                    <span className="block">Lorem ipsum dolor sit, amet consectetur adipisiLorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                                </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
                            <input type="text" placeholder="Ketik Pesan"
                                className="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                                name="message" required />
                            <button type="submit">
                                <svg className="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

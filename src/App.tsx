import React from "react";
import { Chatbot } from "./components/Chatbox";
import { Header } from "./components/Header";

export const App = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-2xl">
                <h1 className="font-sans font-bold text-3xl text-center text-blue-500 mb-4 mt-4">
                    ChatBot Sederhana
                </h1>
                <div className="border rounded">
                    <div className="w-full">
                        <Header/>
                        <Chatbot/>
                    </div>
                </div>
            </div>
        </div>
    );
}

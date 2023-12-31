/* eslint-disable @next/next/no-img-element */
"use client";
import { FormEvent, MouseEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
    const router = useRouter();

    const [input, setInput] = useState("");
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(!input?.trim()) return;
        router.push(`/search/web?searchTerm=${input}`);
    }

    const randomSearch = async () => {
        setRandomSearchLoading(true);
        const res = await fetch("https://random-word-api.herokuapp.com/word");
        const word = await res.json();
        if(!word) return;
        router.push(`/search/web?searchTerm=${word[0]}`);
        setRandomSearchLoading(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
                <AiOutlineSearch className="text-xl text-gray-500 mr-3"/>
                <input type="text" className="flex-grow focus:outline-none" value={input} onChange={e => setInput(e.target.value)} />
                <BsFillMicFill className="text-xl" />
            </form>
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
                <button onClick={handleSubmit} className="btn">Google Search</button>
                <button onClick={randomSearch} className="btn flex items-center justify-center disabled:opacity-80" disabled={randomSearchLoading}>
                    {randomSearchLoading ? <img src="spinner.svg" alt="Loading" className="h-6" /> : "I Am Feeling Lucky"}
                </button>
            </div>
        </>
    )
}

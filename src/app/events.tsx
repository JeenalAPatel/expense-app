'use client';

import {useState} from "react";


export function Events() {
    const [text, setText] = useState("");

    function handleSubmit(e: any) {
        e.preventDefault();
        alert("You have entered " + text);
    }

    return (<div className="text-center">
            <form onSubmit={handleSubmit}>
                <label id="firstname">FirstName:
                    <input type="text" placeholder="Please enter your firstname" id="firstname" value={text}
                           className="border border-solid border-black" onChange={e=>setText(e.target.value)}/></label>
                <button className="border border-solid border-black">Submit
                </button>
            </form>
        </div>
    )
        ;
}


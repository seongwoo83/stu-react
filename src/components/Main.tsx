import { ReactElement } from "react";

export default function Main():ReactElement{

    const number: number = 10;

    return(
        <main>
            <h1>Main</h1>
            <h2>{number}</h2>
        </main>
    )
}
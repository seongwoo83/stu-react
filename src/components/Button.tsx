import { ReactElement } from 'react';
interface Props{
    text: string;
    color?: string;
    children?: ReactElement;
}
export default function Button({text, color="black", children}:Props):ReactElement{

    return(
        <button style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
    )
}
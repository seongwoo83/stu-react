import { ReactElement } from 'react';
interface Props{
    text: string;
    color?: string;
    children?: ReactElement;
}
export default function Button({text, color="black", children}:Props):ReactElement{

    const onClickButton:()=>void = ()=>{
            console.log(text);
    }

    return(
        <button style={{color: color}} onClick={onClickButton}>
        {text} - {color.toUpperCase()}
        {children}
        </button>
    )
}
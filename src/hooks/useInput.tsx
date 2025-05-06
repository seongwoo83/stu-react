import { useState, ChangeEvent } from "react";
function useInput():[string, (e:ChangeEvent<HTMLInputElement>)=>void]{
    const [input, setInput] = useState<string>('');
    const onChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    return [input, onChange];
}

export default useInput;
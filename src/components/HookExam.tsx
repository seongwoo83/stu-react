import { ReactElement } from "react";
import useInput from "./../hooks/useInput";
/**
    hook에 대한 3가지 팁
    1. 함수컴포넌트, 커스텀 훅 내부에서만 호출 가능
    2. 조건부로 호출될 수 없음(조건문, 반복문)
    3. 나만의 hook(custom hook)을 만들 수 있음
*/


const HookExam: ()=>ReactElement = () => {

    const [input, onChange] = useInput();
    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    );
}

export default HookExam;
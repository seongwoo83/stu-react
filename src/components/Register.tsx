import React, {ReactElement, useState } from "react"

// 간단한 회원가입
/**
    1. 이름
    2. 생년월일
    3. 국적
    4. 자기소개
*/

type FormEvent = React.ChangeEvent<
    HTMLInputElement |
    HTMLSelectElement |
    HTMLTextAreaElement
>;

interface InputState {
    name: string;
    birth: string;
    country: string;
    bio: string;
}

const Register:()=>ReactElement = ()=>{

    const [input, setInput] = useState<InputState>({
        name: '',
        birth: '',
        country: '',
        bio: '',
    });

    const onChange = (e:FormEvent)=>{
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div>
                <input type="text" name="name" onChange={onChange} placeholder={'이름을 입력해주세요'} value={input.name} />
            </div>
            <div>
                <input type="date" name="birth" onChange={onChange} value={input.birth}/>
            </div>
            <div>
                <select name="country" onChange={onChange} value={input.country}>
                    <option value="">선택</option>
                    <option value="ko">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea cols={30} rows={10} name="bio" onChange={onChange} value={input.bio} />
            </div>
        </div>
    )
}

export default Register;
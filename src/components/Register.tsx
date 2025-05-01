import React, {ReactElement, useState } from "react"

// 간단한 회원가입
/**
    1. 이름
    2. 생년월일
    3. 국적
    4. 자기소개
*/

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
type FormEventHandler = (e: FormEvent) => void;

const Register:()=>ReactElement = ()=>{

    const [name, setName] = useState<string>('이름');
    const [birth, setBirth] = useState<string>("");
    const [country, setCountry] = useState<string>('')
    const [bio, setBio] = useState<string>('')

    const onChangeName:FormEventHandler = (e)=>{
        setName(e.target.value);
    }

    const onChangeBirth: FormEventHandler = (e)=>{
        setBirth(e.target.value);
    }

    const onChangeCountry: FormEventHandler = (e)=>{
        setCountry(e.target.value);
    }

    const onChangeBio: FormEventHandler = (e)=>{
        setBio(e.target.value);
    }

    return (
        <div>
            <div>
                <input type="text" onChange={onChangeName} placeholder={'이름을 입력해주세요'} value={name} />
            </div>
            <div>
                <input type="date" onChange={onChangeBirth} value={birth}/>
            </div>
            <div>
                <select onChange={onChangeCountry} value={country}>
                    <option value="">선택</option>
                    <option value="ko">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea cols={30} rows={10} onChange={onChangeBio} value={bio} />
            </div>
        </div>
    )
}

export default Register;
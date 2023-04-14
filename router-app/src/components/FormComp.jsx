// 리액트에서 받아옴
import React, {useState}  from 'react'

// 리액트-돔에서 받아옴
// 컴포넌트가 아닌 자바스크립트의 함수로 이동하기 위한 내용
import { useNavigate } from 'react-router-dom';

export default function FormComp() {
// 함수 컴포넌트 안에서 호출
const navigate = useNavigate();
// input 값 받아올 변수
const [input, setInput] = useState("");

// About에 form을 이용하여 쿼리스트링을 전달
return (
    <div>
        <form 
            onSubmit={(e)=>{
                e.preventDefault();
                // 라우터를 이용하여 이동
                // Link 컴포넌트 사용 불가
                // navigate를 통해서, 주소이동 가능
                // navigate(`/about`); form 값 받아와야 값 넘어감
                navigate(`/about?name=${input}`); // 임의로 값 넣기
            }}
        >
            <label htmlFor="">이름</label>
            <input type="text" name='name'
                onChange={(e)=>{setInput(e.target.value)}}
            />
            <input type="submit" value="제출" />
        </form>
    </div>
);}

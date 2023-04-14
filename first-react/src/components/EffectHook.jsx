import React, { useEffect, useState } from 'react'

export default function EffectHook() {
/** hook 작성
 * : 함수형 컴포넌트 안에서만 hook 사용 가능 */
const [count, setCount] = useState(0);
const [date, setDate] = useState(new Date());

// useEffect를 사용하여 라이프사이클 메소드의 효과를 낼 수 있다
// useEffect( ()=>{} ) 함수를 사용하여 내용 작성
// DidMount, DidUpdate를 함께 쓴 효과

useEffect( ()=>{
    document.title = `${count}번 클릭`;
} );

// useEffect를 사용해서 DidMount일 때 사용 : usetEffect( ()=>{}, [] )
// 배열 [] : state나 prop 값이 바뀌었을 때 > 마운트 될 때만 useEffect가 실행될 수 있게 함
useEffect( ()=>{
    setInterval(() => {
        setDate(new Date());
        console.log("실행");
    }, 1000);
}, [] );

// useEffect의 두번째 인자값에 state의 값이 들어갈 때
// 특정 state 값이 바뀌면, useEffect 실행
// useEffect(()=>{}, [state/props] )
// [] 배열 안에 여러 개의 값을 넣어서 사용 가능
// 업데이트 시기 > setState(useState의 함수) 실행 시
useEffect( ()=>{
    // * setCount 사용하면 안됨!
    // setCount(100); >> count 새로 실행할 때마다 100으로 돌아가버림 (무한루프?)
    console.log("count : ", count);
// }, [count, date] )
}, [count] )

// 연습 1 : useEffect 이용하여 생성할 때 >> 빈 배열 []
// alert를 사용하여 "컴포넌트 생성" 경고창 띄우기
useEffect( ()=> {
    console.log("컴포넌트 생성");
}, [] )

// useEffect 이용하여 date값이 바뀔 때
// date의 초를 console.log를 통해 출력
useEffect( ()=>{
    console.log("초: "+date.getSeconds());
}, [date] )

return (
    <div>
    <hr />
    <h1>EffectHook</h1>
    <p>{count}번 클릭</p>
    <button
        onClick={()=>{setCount(count+1)}}
    >+1</button>
    <h3>{date.getMinutes()}:{date.getSeconds()}</h3>

    </div>
); }

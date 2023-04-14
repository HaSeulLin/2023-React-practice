import React, { useEffect, useState } from 'react'

export default function EffectHook2() {
    // useEffect를 사용해서 useState의 비동기 값을
    // 다른 uesState에 담아오는 방법 확인
    const [name, setName] = useState("홍길동");
    const [age, setAge] = useState(29);
    const [profile, setProfile] = useState({name: "홍길동", age: 29});

    // 공공데이터를 담을 공간 (state)
    const [menuList, setMenuList] = useState([]);
    // 공공데이터 요청 후 그 값이 들어왔을 때 확인할 값
    const [loading, setLoading] = useState(false);

    // name 값이 수정되었을 때, 다른 값도 함께 수정
    // 1. setName 먼저 실행
    // 2. useEffect(()=>{},[name])의 함수가 실행 (동시처럼 보임)
    useEffect(()=>{
        setProfile({...profile, name});
    }, [name])

    // age가 바뀌었을 때 profile의 age 값 수정하는 useEffect
    // * 보통은 버튼을 눌렀을 때 그 값이 들어감
    // * 지금은 연습을 위해 함께 바꾸고 있다
    // 출력방식은 name과 동일하게 작성
    useEffect(()=>{
        setProfile({...profile, age});
    }, [age])

    // 컴포넌트가 생성이 되었을 때 공공데이터 가져옴
    // async - await는 세트 >> 비동기 함수로 작성.
    // useEffect의 함수 자체에는 async 붙일 수 없음 (따로 빼서 사용)
    const getMenu = async ()=>{ 
        const promise = await fetch ("https://busan-food.openapi.redtable.global/api/menu-dscrn/korean?serviceKey=XFAXApRDbmxkfUFPH1EOA09wOMOfyTSZt5L8wB9BZfFaZ3gL9fCsYdy9pwhPiSaB&pageNo=2");
        const response = await promise.json();
        console.log(response.body);
        setMenuList(response.body);
    }
    useEffect(()=>{
        // 컴포넌트를 생성할 때 바로 호출
        getMenu()}, [])

    useEffect(()=>{
        // menuList의 처음 값이 빈 값으로 들어감
        // 빈값이 아닌 값이 들어갔을 때 화면에 출력
        console.log(menuList)
        if(menuList.length>0){
            // 값이 들어왔다면 true로 바꿔서 화면 출력
            setLoading(true);
        }
    }, [menuList])


    return (
    <div>
        <p>useState의 값은 비동기로 저장 (실행순서대로 저장되지 않음)</p>
        <label htmlFor="">이름</label>
        <input type="text"
            onChange={(e)=>{
                // name의 값을 바꿔줌
                setName(e.target.value)
                // name 안에 들어가 있는 값을 profile에 전달
                // setProfile({...profile, name: name})과 동일
                // name = "값"이 변수와 값이 객체의 속성과 값으로 들어감
                // 'name' ='값' 즉 '변수'와 '값'이 객체의 '속성'과 '값'과 동일
                // setProfile({...profile}, name);
                
                // 같은 이벤트에서 set을 이용하여 수정한 state 값을 가져올려고 함
                // 이전 값을 가져온다. (현재 바로 수정한 값 접근x)
                // > useEffect의 두번째 값[]에 name값을 넣어서 값이 바뀌었을 때
                // setProfile이 실행되게 수정
            }}
        />
        <h4>name: {name}, profile의 name: {profile.name}</h4>

        <h4>age가 바뀌었을 때 profile의 age 값 수정하는 useEffect</h4>
        <input type="text"
            onChange={(e)=>{
                // age값 바꾸기
                setAge(e.target.value)}}
        />
        <p>age값 : {age}, profile age값 : {profile.age}</p>

        <hr />
        {/** 공공데이터로 값을 가져올 때, 그 값이 바로 들어오지 않는다?
        <p>공공데이터로 가져온 값 : {menuList[0].MENU_NM}</p>
        */}
        <p>공공데이터로 가져온 값 : {loading && menuList[1].MENU_NM}</p>
    </div>
);
}

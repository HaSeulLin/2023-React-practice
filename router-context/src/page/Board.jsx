import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import data from '../data/dummy.json'

// board에 data의 내용이 필요함
export default function Board() {
    const navigate = useNavigate();

    const {id} = useParams();
    // 배열의 함수인 find를 이용하여
    // 함수의 조건이 참인 하나의 값을 가져온다
    // find로 가져온 값은 배열 안에 있는 하나의 값
    // find로 값을 찾지 못할 경우 undefined를 출력
    // undefined의 값 속성을 찾으려고 하면 >> 오류!
    const boardData = data.find((d)=>(d.id==id));

    // useEffect를 사용해서 boardData 값이 undefined면
    // 오류 페이지 컴포넌트로 이동 혹은 목록으로 이동
    // 두번쨰 인자값이 빈 배열이라면 컴포넌트 생성 시에 실행
    useEffect(()=>{
        if (boardData == undefined){
            navigate('/boardlist');
        }
    }, [])
    
  return (
    <div>
        {   // 화면이 먼저 화면에 렌더되고, useEffect 실행
            // 화면 상에서 나타나는 오류를 제거하고
            // useEffect로 이동
            boardData && (
                <>
                    <h3>제목 : {boardData.title}</h3>
                    <p>작성자 : {boardData.writer}</p>
                    <p>내용 : {boardData.content}</p>
                    <p>날짜 : {boardData.date}</p>
                </>
            )
        }
    </div>
  )
}

import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

// Context의 값을 가져오기 위해서 Context 호출
export default function ContextBox() {
  return (
    <div><ContextText></ContextText></div>
  )
}

function ContextText () {
    // useContext() ThemeContext를 가져와서 출력하시오
    const context = useContext(ThemeContext);
    return <p>{context}</p>
}
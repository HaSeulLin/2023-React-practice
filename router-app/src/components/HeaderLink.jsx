import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import '../css/headerlink.css'

export default function HeaderLink() {

const fruit = "banana";

return (
    <div>
        {/** a태그 대신 컴포넌트의 주소로 이동 */}
        <NavLink 
        // 해당 페이지 주소(선택)일 때만 className 적용
        // 해당 페이지 하위 페이지(주소 뒤에 다른 값 추가로 붙어도)에도 스타일 적용됨 
        className={({isActive})=> isActive ? 'link-style' : undefined}
        to="/about"> About | </NavLink>
        {/** to의 속성값으로 자바스크립트의 문자열 가능 */}
        <NavLink
        className={({isActive})=> isActive ? 'link-style' : undefined}
        to={`/story/${fruit}`}> Story | </NavLink>
        <NavLink
        className={({isActive})=> isActive ? 'link-style' : undefined}
        end
        // end : 주소가 완전히 일치할 때만 class 이름 추가 (하위 페이지x)
        to="/story2"> Story2 | </NavLink>
        <NavLink
        className={({isActive})=> isActive ? 'link-style' : undefined}
        to="/articles"> Articles |</NavLink>
        <NavLink
        className={({isActive})=> isActive ? 'link-style' : undefined}
        to="/navigate"> NavigatePage |</NavLink>
    </div>
);}

import React from 'react'
import { Link, Outlet } from 'react-router-dom';

// 배열 리스트를 이용하여 화면 출력
export default function Story2List() {
const fruits = ["apple", "orange", "peach"];

return (
    <div>
    <h2>Story2List : Story2의 목록</h2>
    {
        fruits.map((f, i)=>(
            <Link to={`/story2/${f}`} key={i}> <p>Story2 {f}</p> </Link>
            ))
        }
    <Outlet></Outlet>
    </div>
);}

import React from 'react'

// Link를 통해서 react-router-dom에서 지정한 주소로 이동
import {Link} from 'react-router-dom'
import FormComp from '../components/FormComp';

export default function Home() {
    const fruit = "banana";
    const fruits = ["apple", "orange", "peach"];
    const couple = ["merryjell", "luxury", "blecell", "limblic"];
    return (
    <div>
        <h1>Home</h1>
        <p>현재 화면은 홈입니다.</p>
        {/** a태그 대신 컴포넌트의 주소로 이동 */}
        <Link to="/about"> About | </Link>
        <Link to="/story2"> Story2 | </Link>
        {/** to의 속성값으로 자바스크립트의 문자열 가능 */}
        <Link to={`/story/${fruit}`}> Story | </Link>
        <Link to="/articles"> Articles |</Link>
        <Link to="/navigate"> NavigatePage |</Link>

        <hr />
        <FormComp />


        <hr />
        {/** map을 이용해서 배열의 값을 Link의 to 주소값으로 사용*/
        fruits.map((f,i)=>(
            <Link to={`/story/${f}`} key={i}> [{f} Story] </Link>
        ))
        }
        <hr />
        {/** couple의 map을 사용하여
         * /story2/[couple]로 이동하는 Link 작성 */
        couple.map((c,i)=>(
            <Link to={`/story2/${c}`} key={i}> {c} Story2 | </Link>
        ))}


    </div>
);}

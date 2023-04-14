import { useState } from "react";

const ReactPractice = (props) => {
    {/** 1. 배열 */}
    // const array = [1,2,3,4];
    // const arrayMap1 = array.map(x=>x*2);
    // console.log(arrayMap1);
    // const arrayMap2 = array.map(x=>String(x))
    // console.log(arrayMap2);
    // const arrayMap3 = array.map(x=> x%2==0 ? x*2 : x);
    // console.log(arrayMap3);

    {/** 2. filter() */}
    // const array = [1,2,3,4,5,6,7];
    // const arrayFilter1 = array.filter((a)=>a%2==0);
    // console.log(arrayFilter1);
    // const arrayFilter2 = array.filter((a)=>a<5);
    // console.log(arrayFilter2);
    // const arrayFilter3 = array.filter((a)=>a!==6);
    // console.log(arrayFilter3);

    {/** 3. 스프레드 연산자 */}
    // const array = {id:1, name:"홍길동", checked:true};
    // console.log(array);
    // const array1 = {...array, name:"성춘향"};
    // console.log(array1);
    // const array2 = {...array, checked: !array.checked};
    // console.log(array2);

    {/** 4. 비구조 할당 */}
    // const array = {text:"hi", num:1};
    // const {text, num}=array;
    // console.log(text, num);
    // const array2 = ["hello",2];
    // const [text2,num2]=array2;
    // console.log(text2, num2);

    {/** 5. props */}
    // const {color, children} = props;           
    // return ( // style = { color:“”, background:“” ... } 객체 불러옴
    //     <div style={{color: color}}>{children}</div>
    // );

    {/** 6. state */}
    const {num} = props;
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{count}</h2>
            <button
                onClick={()=>{
                    setCount({count : count + num});
                }}
            >+{num}</button>
        </div>
    );
}

export default ReactPractice
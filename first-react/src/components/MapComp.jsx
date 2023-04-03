import React, { Component } from 'react'

export class MapComp extends Component {

    constructor(props){
        super(props);
        // this.state에 들어가 있는 내용만 this.setState사용
        this.state={
            names : ["홍길동","성춘향","장발장"],
            students : [
                {id:1, name:"홍길동"},
                {id:2, name:"성춘향"},
                {id:3, name:"John"},
                {id:4, name:"흥부"}
            ],
            inputText : "" // onChange이용해서 input의 value값 가져옴
        };
    }
        
    
    // 버튼을 클릭했을 때 state.students에 {id:4, name:""} 추가
    addStudent = () => {
    // 리액트는 state값이 바뀔 때 화면 업데이트
    // 1. state.students에 배열의 요소를 추가하는 방법
        // 1) push : 기존의 배열에 추가
        // 2) concat : 새로운 배열에 추가 후 return

    // push를 이용해서 직접 접근해서 수정할 수 있지만
    // 화면에 바로 업데이트 되지 않는다
    // >> button의 click 이벤트 발생 시가 아니라
    // >> 다음 onChange 이벤트 발생 시에 업데이트 됨
    // setState()가 호출되면 화면 업데이트함
    // this.state.students.push({id:4, name:this.state.inputText})
            
    // concat을 이용해서 새로운 배열을 만든 후
    // setState를 이용해서 추가
    // id 값은 중복되지 않게 사용. 1씩 증가시키기.
    // 1씩 증가 >> 배열의 길이값이 1씩 증가
    const newStudents = this.state.students.concat(
        {id : this.state.students.length+1,
        name : this.state.inputText})
        this.setState({students : newStudents});
        
    // input 태그에 value={} state값으로 연결하면
    // setState를 통해서 값을 수정할 수 있다
    // 접근하는 state의 이름이 다르면 따로 적어도 괜찮다
    // this.setState({students : newStudents, inputText : ""})
    this.setState({inputText : ""})
    }

    render() {
    // 배열의 map 메소드 확인
    // .map((value,index)=>{return 값})
    // map에 함수를 넣어서 그 함수의 return 값으로
    // 새로운 배열 작성
    // >> return 값에 태그나 컴포넌트를 넣어서 반복 가능

    const array = [1,2,3,4];
    // array.map(value) : 배열이 숫자면 num, 이름이면 name 같은 변수 이름 주로 사용
    // p태그로 출력 가능 > js처럼 {}써줘서 값 출력
    const arrayMap = array.map((num, index)=><p key={index}>{num*2}</p>);

    return (
    <div>
        <h3>배열을 바로 출력</h3>
        <p>{array}</p>
        <p>{arrayMap}</p>
        <h3>map으로 만든 배열을 화면에 바로 출력 가능</h3>
        {/* {array.map((num)=><p>{num*3}</p>)}
         *  key 오류 발생 > index 추가 */}    
        {array.map((num,index)=><p key={index}>{num*3}</p>)}

        {/** state 값을 가져와서 출력 */}
        <ul>
            {this.state.names.map((name, index)=><li key={index}>
                <span>이름 : </span>{name}</li>)}
        </ul>

        {/** input 태그를 이용해서 값을 추가하고 state.students에 추가
         *  1. input의 값을 저장할 state.inputText 변수 작성
         *  2. onChange 통해서 값을 받아옴 (state.inputText)
         *  3. 버튼을 클릭했을 때 state.students에 추가
         */}
        <input type="text"
            // inputText에 값을 저장
            onChange={(e)=>{this.setState({inputText : e.target.value})}}
        />
        <button
            onClick={this.addStudent}>
            이름 추가
        </button>

        {/** map 실습 */}
        <table>
            <tbody>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                </tr>
                {this.state.students.map((student)=>
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td
                        onClick={()=>{
                        // 이름을 클릭하면 해당 객체를 삭제
                        // 1. 배열에서 값을 제거하는 방법 
                            // 1) po, splice .. > 원래값에 제거 >> 사용 x
                            // 2) 값을 제거하고 새로운 배열 생성 : filter
                            // filter : ()=>
                        }}
                    >{student.name}</td>
                </tr>)}
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {
                // 컴포넌트의 props 값을 이용해서 값 전달 가능
                this.state.students.map((student)=>
                <TableComp key={student.id} name={student.name} id={student.id}/>)
                }
            </tbody>
        </table>
    </div>
    )
}}

export default MapComp

/// map에서 사용할 컴포넌트
class TableComp extends Component {
    // 호출하는 컴포넌트(부모)에서 값을 받아서 씀 : props
    render(){
        const {id, name} = this.props;
        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
            </tr>
        );
    }
}
import React, { Component } from 'react'

export class MemoComp extends Component {

constructor (props){
    super (props);
    this.state = {
        memoList : [
            {id : 1, memo : "기록", time : new Date()},
            {id : 2, memo : "연습", time : new Date()}
        ],
        inputText : ""
    };
    this.id=3; // 다음부터 추가할 메모 id 기본값
}

btnAdd = () => {
    const newMemo = this.state.memoList.concat(
        {
            // ++는 후위연산자로 값을 할당(모든 연산)이 끝난 후에
            // 값을 1 증가 시킨다
            id : this.id++,
            memo : this.state.inputText,
            time : new Date()
        })
        this.setState({memoList : newMemo});
        this.setState({inputText : ""});
}


deleteLi = (id) => {
    // filter를 사용 : 동일한 id를 제외한 배열 생성
    // filter의 함수의 결과가 참일 때 배열에 남김
    // m에서의 id값과 현재 list의 id값 비교
    const newMemo = this.state.memoList.filter(
        (m)=>m.id !== id)
    this.setState({memoList : newMemo});
}

// 시간 값을 편하게 출력하기 위한 메소드
// 출력 return을 통해서 화면에 출력 가능
// 시간을 출력하기 위해 time 값 가져옴
printClock = (time) => {
    // 가능하면 this.setState 사용 X
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}


render() {
    return (
    <div class="memocomp">
        <hr />
        <div>
        <h2>기록장 작성</h2>
        <input type="text"
            onChange={(e) => {
                this.setState({inputText : e.target.value})}}
        />
        <button
            onClick={this.btnAdd}
        >메모 추가</button>
        <ul class="memo">
            <li>id | memo | time</li>
        {
            this.state.memoList.map((list)=>
            <li key={list.id}
                onClick={()=>{this.deleteLi(list.id)}}
// {new Date(list.time).toLocaleDateString()} {new Date(list.time).toLocaleTimeString()}
                >{list.id} | {list.memo} | {this.printClock(list.time)}
            </li>)
        }
        </ul>
        </div>
    </div>
    );
}}

export default MemoComp
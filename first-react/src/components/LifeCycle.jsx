import React, { Component } from 'react'

// 클래스형 컴포넌트에서 라이프 사이클 작성
export class LifeCycle extends Component {
constructor(props) {
    super(props);
    this.state = {
        count : 0,
        date : new Date()
    }
    // 속성 또는 필드라고도 함
    this.timerID = "";
}

// 라이프 사이클 메소드 - 마운트 되었을 때: 시작했을 때
// didMount >> 보통 컴포넌트가 보이는 한 번만 실행
componentDidMount() {
    console.log("마운트가 되었습니다")
    // 처음 한 번 실행하는 내용 작성
    // 또는 외부에서 값을 한 번만 가져올 때
    // setInterval(() => {
    //     this.setState({date : new Date()})
    //  }, 1000);
    setInterval(this.tick, 1000);
}

// 라이프 사이클 메소드 : 업데이트가 되었을 때 : 화면이 바뀌었으 때
// 현재 컴포넌트가 업데이트 될 때마다 실행
// props의 값이 바뀔 때, setState를 통해서 값이 바뀔 때
componentDidUpdate() {
    // 업데이트(버튼 클릭) 있을 때마다 실행
    console.log("업데이트가 되었습니다")
}
componentWillUnmount() {
    console.log("컴포넌트가 언마운트 되었습니다")
}

// 화면에 시간 출력하는 메소드
printClock = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${String(hours).padStart(2,"0")}
    : ${String(minutes).padStart(2,"0")} : ${String(seconds).padStart(2,"0")}`;
}

// 시간값을 다시 할당 메소드
tick = () => {
    // setState를 사용할 때마다 업데이트 발생
    this.setState({date : new Date()})
}


render() {
    return (
    <div>
        <hr />
        <h1>LifeCycle</h1>
        <h3>라이프 사이클</h3>
        <h3>{this.state.count}</h3>
        <button
            onClick={()=>{
                this.setState({count : this.state.count+1})
            }}
        >+1</button>

        <hr />
        <h3>시계 {this.printClock(this.state.date)}</h3>
    </div>
    )
}
}

export default LifeCycle
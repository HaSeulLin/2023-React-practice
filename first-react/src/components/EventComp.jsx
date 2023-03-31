import React, { Component } from 'react'

export class EventComp extends Component {

//state 작성
constructor (props) {
    super(props);
    this.state = {
        name : "홍길동",
        address : "부산",
        toggle : true
    }

    // 메소드에 .bind로 묶어서 this 전달
                    // 아래 this.printEvent는 작성한 메소드
                    // 그 메소드에 .bind(this)로 연결
    this.printEvent = this.printEvent.bind(this);
    // this.printEvent 이름
    // let num=0; num=num+1; >> num의 결과:1 같은
    this.addressEvent = this.addressEvent.bind(this);
    this.setToggle = this.setToggle.bind(this);
}

// 이벤트 안에서 작성한 함수 그대로 들고와서 사용할 수 있다
// render에서 가져왔던 값을 쓸 수 없다
// this.state.name을 통해서 접근
// 메소드에 바로 bind를 통해서 this를 묶어줄 수 없다
// 메소드만 만들어서 바로 사용하면 this를 찾지 못해서 오류
// >> constructor에서 bind로 묶어서 사용
printEvent(){
    console.log("이벤트 출력");
    console.log(this.state.name);
}

addressEvent(e) {
    console.log(this.state.address);
    console.log(e.type, "이벤트 완료");
}

// this.setState 사용해서 값 수정
setToggle () {
    this.setState({toggle: !this.state.toggle})
}



render() {
    // render 안에서 this = EventComp;
    // this.state는 construct의 속성값
    const {name} = this.state;

    return (
        // 이벤트를 위한 버튼 작성
        <div>
            <h3>버튼을 클릭했을 때 console.log("이벤트 실행")</h3>
            <button
                // (화살표함수를 이용하여 바로 작성)
                // 익명함수 사용해서 이벤트 객체 사용가능
                // this를 사용하면 연결된 객체가 없으므로 undefined 출력
                // html파일에서 js 익명함수를 들고 오면 window 객체로 들고오지만
                // react에서 익명함수를 들고오면 this의 값이 undefined이다
                // react에서 익명함수를 사용하려면 함수의 this값을 연결
                // this값을 연결하기 위해 .bind(this)
                // return 안에서 .bind(this) 불러오는 this = EventComp
            onClick = {function(e){console.log(e, this)}.bind(this)}
            >
                익명함수를 사용해서 이벤트 실행
            </button>

            <h3>이벤트의 함수(메서드)를 따로 작성하는 방법</h3>
            <p>
                버튼을 눌렀을 때 console.log(이벤트 출력)
                this.state.name "홍길동"을 출력
            </p>
            <button
                onClick = { function(){
                    console.log("이벤트 출력");
                    console.log(name);
                }.bind(this)
            }
            >
                메소드를 사용한 이벤트
            </button>
            <button
                // 작성한 메소드를 들고올 때 this.를 통해 가져옴
                onClick={this.printEvent}
            >
                메소드를 사용한 이벤트
            </button>

            {/** 이벤트 : 메소드 만들기 실습 */}
            <p>
                버튼을 누르면 state의 address 부산을 출력하고
                console.log를 이용하여 이벤트 완료 출력
            </p>
            <button
                onClick = {this.addressEvent}
            >
                이벤트
            </button>

            {/** this.setState를 사용하는 메소드 */}
            <button
                onClick = {this.setToggle}
            >
                {this.state.toggle ? "on" : "off"}
            </button>
        </div>
    )
}}

export default EventComp;
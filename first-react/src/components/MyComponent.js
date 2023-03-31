// 파일의 이름과 클래스 이름 동일하게 사용
// 클래스형 컴포넌트
// react의 component를 상속 받아와서 사용
// 상속을 받아와서 사용하게 되면 component의 내용을 사용 가능

import { Component } from "react";

class MyComponent extends Component {
    // 클래스형 컴포넌트의 특징
    // render 함수에서 return을 통해 html을 내보냄
    render() {
        const name = "React";
        // html 내용 출력
        return (
            <div>
                <h1>클래스형 컴포넌트입니다</h1>
                <p>{name} 공부를 하고 있습니다</p>
            </div>
        )
    }
}

export default MyComponent;
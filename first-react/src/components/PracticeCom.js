import { Component } from "react";

class PracticeCom extends Component {
    render () {
        // 변수 작성
        // 클래스에서 props 값을 가져올 때는 this.props를 통해 들고온다
        // this.props은 Component에서 상속 받아옴
        // this.props = {login:true, name:"홍길동"}
        // 비구조화 할당 (구조 분해)
        // : 배열이나 객체와 같이 값이 여러개인 자료형을
        // 안에 있는 요소를 꺼내서 각각의 변수에 따로 저장하는 방식
        const prop =this.props;
//        const {login, na} = this.props;
        const {login, name, children} = this.props;
        console.log(prop);
        console.log(prop.login);
        console.log(login);
//        console.log(na); // undefined :: 객체의 속성 이름과 똑같이 해야함
        console.log(name);
        // const login = true;
        return (
            <div>
                <h1>{name}</h1>
                <p>{children}</p>
                {login ?
                    <LoginText />
                :
                    <div>
                        <h2>로그인이 필요합니다</h2>
                        <p>리액트를 시작하였습니다</p>
                    </div>                    
                }
            </div>
        );
    }
}

// 하나의 컴포넌트 작성 파일 안에
// 클래스형 또는 함수형 컴포넌트를 여러 개 작성할 수 있다
// export를 이용하여 내보내주지 않으면 외부에서는 사용 불가능
class LoginText extends Component {
    render() {
        return (
        <div>
            <h2>로그인에 성공하였습니다</h2>
            <p>홍길동입니다</p>
        </div>
        );
    }
}

class TextComp extends Component {
    render() {
        const prop =this.props;
        console.log(prop);
        const {name, children} = this.props;
        return (
            <div>
                <h1>{children}</h1>
                <p>{name}님</p>
            </div>
        );
    }
}


// 다른 내용을 export를 통해 내보낼 때
export {LoginText};

// 주로 하나의 컴포넌트 작성파일에서 하나의 컴포넌트를 내보냄
export default PracticeCom;

export {TextComp};
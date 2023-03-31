import React, { Component } from 'react'

export class LoginComp extends Component {

constructor (props) {
    super(props);
    this.state = {
        name : "",
        login : false
    }
}

loginInput = (e) => {
    this.setState({name : e.target.value})
}
loginTrue = () => {
    this.setState({login: true})
}

render() {
    const {name, login} = this.state;
    return (
    <div>
        {/** claassName = {login ? "on" : "off"}
         * 클래스네임을 이용해서 디자인 추가하는 게 편함
         */}
        <h1 style={login ? {display: 'block'} : {display:'none'}}>
            {name}, {login ? "true" : "false" }
        </h1>
        <div style={{display: login ? "none" : "block"}}>
            <p>이름을 입력하세요</p>
            <input type="text"
                onChange={this.loginInput}
                />
            <button
                onClick={this.loginTrue}
            >확인</button>
        </div>
    </div>
    )
}
}

export default LoginComp
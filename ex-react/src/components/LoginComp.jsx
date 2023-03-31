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
    console.log(e.target.value);
    this.setState({[e.target.name] : e.target.value})
}
loginTrue = () => {
    this.setState({login: !this.state.login})
}

render() {
    let loginstate = this.state.login ? 'logout' : 'login'
    return (
    <div>
        <p>{this.state.login ? '' : '이름을 입력하세요'}</p>
        <input type="text"
            onChange={this.loginInput}
            name = 'name'
            placeholder='이름'
            />
        <button
            onClick={this.loginTrue}
        >
            {loginstate}
        </button>
        <h1>{this.state.login ? this.state.name+'님이 로그인했습니다' : ''}</h1>
        <hr />
    </div>
    )
}
}

export default LoginComp
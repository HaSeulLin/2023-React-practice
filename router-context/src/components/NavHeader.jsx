import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import DataContext from '../context/DataContext'

export default function NavHeader() {
  const { state } = useContext(DataContext);
  return (
    <div className='nav'>
        <NavLink to='/'
          style={({isActive}) => isActive ? {color:'mediumpurple', fontWeight:'bold'} : undefined}
        >HOME</NavLink>
        <NavLink to='/boardlist'
          style={({isActive}) => isActive ? {color:'mediumpurple', fontWeight:'bold'} : undefined}
        >BOARD</NavLink>
        <NavLink to='/boardwriteform'
          style={({isActive}) => isActive ? {color:'mediumpurple', fontWeight:'bold'} : undefined}
        >WRITE</NavLink>
        <NavLink to='/image'
          style={({isActive}) => isActive ? {color:'mediumpurple', fontWeight:'bold'} : undefined}        
        >IMAGE</NavLink>
        <NavLink to='/login-form'
          style={({isActive}) => isActive ? {color:'mediumpurple', fontWeight:'bold'} : undefined}        
        >LOGIN</NavLink>
        {/**
         * state의 user의 login이 false일 때 : Link
         * true일 때 : user의 writer 출력
          */}
        {
          state.user.login ? 
          <NavLink to='/mypage'
          style={({isActive}) => isActive ? {color:'mediumpurple', fontWeight:'bold'} : undefined}          
          > {state.user.writer}님의 PAGE </NavLink>
          : <span>익명 로그인</span>
          // <Link to='/login-form'>LOGIN</Link>
        }
    </div>
  )
}

import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/DataContext'
import { useState } from 'react';

// DataContext를 받아와서 name을 수정할 수 있게 하기
export default function DataPrint() {
    const value = useContext(DataContext);
    const [newName, setNewName] = useState("");
  return (
    <div>
        <input type="text"
            placeholder='이름 수정'
            onChange={(e)=>(setNewName(e.target.value))}
        />
        <button
            onClick={()=>{value.action.setName(newName)}}
        >
            이 버튼을 누르면 DataBox에 출력
        </button>
    </div>
  )
}

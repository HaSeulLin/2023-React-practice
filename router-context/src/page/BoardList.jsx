import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import data from '../data/dummy.json'

// json을 이용한 데이터를 들고와서
// 목록 출력
export default function BoardList() {
    const [dataList, setDataList] = useState(data);
  return (
    <div>
        <h3>BoardList</h3>
        <ul>
            {
                dataList.map((data)=>(
                    <li key={data.id}>
                        <Link to={`/boardlist/${data.id}`}>
                            {data.title}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

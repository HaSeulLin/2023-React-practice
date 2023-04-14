import {useState} from "react";

let id = 4;

const Arrowstate2 = (props) => {
    
    {/** 변수 state */}
    const [consumers, setConsumers] = useState(
        [
            {id: 1, name: "Kim", checked: true},
            {id: 2, name: "Hong", checked: false},
            {id: 3, name: "Soe", checked: false},
            {id: 4, name: "Lee", checked: true}
        ]
    );

    const [inputText, setInputText] = useState("");

    {/** 메소드 */}
    const deleteList = (id) => {
        // 버튼 누르면 해당 li 삭제하기
        // filter 사용 >> 해당 li 제외하고 반환.
        // deleteList에 consumer.id 값 변수 con으로 넣음
        const reConsumers = consumers.filter((c) => c.id !== id);
        setConsumers(reConsumers);
    }

    const saveName = (e) => {
        // input text 값 저장
        setInputText(e.target.value)
    }

    const addList = () => {
        // input text 받은 값 li로 추가하기
        // concat 사용
        const newConsumers = consumers.concat(
            {
                id : id++,
                name : inputText
            }
        );
        setConsumers(newConsumers);
    }

    return (
        <div>
            <hr />
            <h2>학생 이름 리스트</h2>
            {/* <p>{consumers.id}</p>
            <p>{consumers.name}</p> : 값 안나옴 */}
            <ul>
                {
                consumers.map((consumer)=>
                <li key={consumer.id}>
                    <input type="checkbox"
                    />
                    {consumer.id} : {consumer.name}
                    <button
                        onClick={()=>deleteList(consumer.id)}
                    >X</button>
                </li>
                )
                }
            </ul>
            <input type="text"
                placeholder="Input name..."
                onChange={saveName}
            />
            <button
                onClick={addList}
            >명단 추가</button>
        </div>
    );
}

export default Arrowstate2;
import React, { useContext, useRef, useState } from 'react'
import DataContext from '../context/DataContext'
import { Link } from 'react-router-dom';

export default function MyPage() {

    const {state, action} = useContext(DataContext);

    const [show, setShow] = useState(false);
    // DOM에 접근하기 위해 리액트에서 id 대신 사용하는 useRef
    // id 대신 useRef 사용하는 이유 :
    // id값으로 접근하면 return의 화면이 다 호출된 뒤에 접근
    //  >> useEffect를 이용해서 마운트 후에 id 접근
    // useRef를 사용하면 지금 바로 작성을 해도 마운트 후에 값을 가져옴

    // React는 가상 돔이기 때문에 render 이후에 return의 태그들이 화면에 출력됨
    // 미리보기 이미지 선언 >> useRef 선언된 구간 들고옴?
    const prePic = useRef();

    const [proPicsave, setProPicSave] = useState(state.user.profile);

    // 좋아요 삭제 메소드
    // 1. 삭제할 id를 찾는다.
    // 2. 삭제할 id를 제외하고 새로운 배열을 만든다
    // 3. 
    const deleteLike = (id) => {
        const newLikelist = state.likelist.filter((like)=>(like.boardId!==id));
        action.setLikelist(newLikelist);
    }

    // 프로필 이미지를 바꾸는 메소드 >> 모달창 사용하는 방식
    const changeProfile = () => {
        // 1. 사진을 선택하는 파일 등록 창 출력
        // 2. 사진 선택하면 프로필 사진이 바뀜
        // set 메소드 사용해서 user.profile 값 변경
        setShow(true);
    }

    // input태그 안에 있는 file 값을 가져오는 메소드
    // input 태그 안에 있는 값을 가져오기 위해 e객체 사용
    const upLoadFile = (e) => {
        // 이벤트 객체의 파일 배열 중 0번째 인덱스 값 사용
        console.log(e.target.files[0]);
        // URL.createObjectURL()을 이용하여 파일의 값을 변형해서 사용
        // 나중에 DB에서도 저장해서 사용 가능

        // 파일 선택 중간에 취소하면 error (undefined)
        // URL.createObjectURL에서 문제 발생
        // typeError : 잘못된 값이 들어갔을 때 생기는 오류
        // >> 확인하니 값을 선택하지 않았을 때 undefined가 들어감

        // 해결방법 생각하기
        // 1) undefined 값이 들어왔을 때 다른 값으로 수정해서 넣기
        // 2) undefined가 들어왔을 때 메소드(함수) 중지
        //      >> 메소드 중지 : return을 실행하면 메소드 종료
        if (e.target.files[0]===undefined) { return -1; }

        // user.profile에 넣어서 사용, 바로 화면 바뀜
        // 모달창의 확인 버튼을 눌렀을 때 바뀌게 하려면
        // 이 아래 코드를 옮겨서 사용.
        // 단, 위치가 바뀌면 e.target.files[0] 값 잃어버리기 때문에
        // useState()를 이용하여 저장해 사용한다
        action.setUser(
            {
                ...state.user,
                profile : URL.createObjectURL(e.target.files[0])
            }
        )

        // useRef로 들고온 미리보기 div를 들고 와서
        // style의 backgroundImage를 바꿔 출력
        console.log(prePic);
        prePic.current.style.margin="auto";
        prePic.current.style.backgroundSize="cover";
        prePic.current.style.backgroundImage=`url(${URL.createObjectURL(e.target.files[0])})`;
    }


  return (
    <div>
        <h3>MyPage</h3>
        <div>
            <img src={ state.user.profile } alt="프로필 사진" width={200}
                style={{borderRadius:"100%", border:"1px solid black"}}
            />
            <br />
            <button
                onClick={changeProfile}
                // 프로필 수정 누르면 modal창 떠서 파일 선택 가능
            >프로필 수정</button>
        </div>
        <h5>{state.user.writer}님의 Page</h5>
        <hr />
        <h5>좋아요 리스트</h5>
        <ul>
            <li>게시글 제목</li>
            {
                state.likelist.map((like)=>
                <li key={like.boardId}>
                    <Link to={`/boardlist/${like.boardId}`}>{like.title}</Link>
                    <button
                        // 보낸 값이 바로 실행되는 걸 막기 위해서 ()=>{}
                        onClick={()=>{deleteLike(like.boardId)}}
                    >삭제</button>
                </li>
                )
            }
        </ul>
        {/**모달창을 사용하기 위한 공간
         * 모달창의 형태 : 전체화면에 출력되는 창 (디자인 먼저 넣어줌)
         */}
        <div className='medal-background'
            style={{
                width:"100%", height:"100vh",
                backgroundColor:"rgba(0,0,0,0.5)", color:"white",
                position:"fixed", top:"0",
                // 모달창의 화면을 display 값에 따라 수정
                // >> useState로 작성해 화면에 출력
                // show를 이용해서 display 설정
                display: show ? 'block' : 'none'
            }}
        >
            <div className='modal'
                style={{
                    width:"80%", height:"300px",
                    backgroundColor:"white", color:"black",
                    margin:"auto", marginTop:"50px",
                    padding:"30px 10px",
                    borderRadius:"30px"
                }}
            >
                {/** 미리보기 이미지 
                 * div의 backgroundImage로 가져오기 (img 태그로 가져와도 됨)
                 * 
                 * ✔ 이미지 값을 넣어주기 위해서 div의 ref를 지정하여
                 * DOM으로 들고와서 지정
                 * 
                 * 이미지 값을 useState 저장해서 값이 있을 때
                 * backgroundImage에 출력
                 */}
                <div
                    ref={prePic}
                    style={{
                        width:"150px", height:"150px",
                        backgrounColor:"lightgray"
                    }}
                >
                </div>

                <input type="file" name="" id=""
                    //onChange를 이용하여 들고오는 사진이 바뀔 때마다 실행
                    //실행하면서 input 그 값을 가져옴
                    //input:text에서 값 들고오는 것과 유사
                    onChange={upLoadFile}
                />
                <button
                    onClick={()=>{setShow(false)}}
                >닫기</button>
            </div>
        </div>
    </div>
  );
}

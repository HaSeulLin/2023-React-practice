const ArrowComponent = (props) => {
    // props 받아옴
    // 변수 넣어서 사용 가능 (this x)
    const {text, children} = props;

    return (
        <div>
            <hr />
            <h2>함수형 컴포넌트</h2>
            <p>하나의 부모 태그로 전달</p>
            <p>text 속성으로 가져온 props값 {props.text}, {text}</p>
            <p>{props.children}, {children}</p>
        </div>
    );
}

export default ArrowComponent;
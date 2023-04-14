const Arrowtest2 = (props) => {

    const {name, check, children} = props;

    return (
        <div>
            {{check} ? <h3>{name}님</h3> : ""}
            <p>{children}</p>
        </div>
    );
}

export default Arrowtest2;
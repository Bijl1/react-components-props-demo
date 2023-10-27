function Greeting(props) {

    console.log(props);

    return (
        <div>
            <u>Hello {props.firstName} {props.nameTwo} {props.nameThree}!</u>
        </div>
    );
}

export default Greeting;
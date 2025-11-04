import {userState} from "react";
function Greeting(){
    const[message,setMessage]=useState("Hello class");

    function changeMessage(){
        setMessage("you clicked the button! ")

    }
    return (
        <div>
            <h2>{message}</h2>
            <buttopn onClick={changeMessage}>Click Me</buttopn>
        </div>
    );
}
export default Greetings;

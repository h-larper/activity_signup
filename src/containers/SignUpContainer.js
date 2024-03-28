import { useState } from "react";
import Counter from "../components/Counter";

const SignUpContainer = ({}) => {

    const [archeryCount, setArcheryCount] = useState(0);     // option + shift + down to duplicate a line
    const [zorbCount, setZorbCount] = useState(0);
    const [canoeCount, setCanoeCount] = useState(0);

return(
    <>
        <h2> Activities:</h2>
        <Counter title={"Archery"} count={archeryCount} onButtonClick={setArcheryCount}/>                             
        <Counter title={"Zorbing"} count={zorbCount} onButtonClick={setZorbCount}/>
        <Counter title={"Canoeing"} count={canoeCount} onButtonClick={setCanoeCount}/>
        <p>Total Sign-Ups: {archeryCount + zorbCount + canoeCount} </p>
    </>
) 

}

export default SignUpContainer;
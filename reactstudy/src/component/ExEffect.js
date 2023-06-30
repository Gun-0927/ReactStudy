import React, {useState, useEffect } from "react";

function ExEffect(){
    //생명주기함수 componentDidMount, componentDidUpdate, 
    //componentWillUnmount
    const [count, setCount] = useState(0);
    const [sum, setSum] = useState(0);
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('!! every render !!');
    });
    useEffect(() => {
        console.log('@@ only first render @@');
    }, []);
    useEffect(() => {
        console.log(' ## first render and value change ##',count);
        setSum(() => sum+count);
    }, [count]);
    useEffect(()=> {
        console.log('time',time);
        let timer = setTimeout(()=>{
            setTime((time)=>time+1);
        },1000);

        return () => clearTimeout(timer)
    },[time])

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Sum: {sum}</p>
            <p>Time: {time}</p>
        </div>
    )
}
function ExEffect2(){
    return(
        <div></div>
    )
}
export default ExEffect;
export {ExEffect2};
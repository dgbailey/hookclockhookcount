import React, {useState,useEffect,useRef} from 'react';
import styled from 'styled-components';


export const Counter = () =>{
    console.log('new counter render')
    const ref = useRef();
   


    let [count,setCount] = useState(0);

    function callBack(){
        setCount(count = count +1)
    }

    useEffect(() => {
        ref.current = callBack;
    })

    //use effect usually runs on every re-render unless configured otherwise

    //instead set interval will now call the new function object with the new closure over updated state

    useEffect(() => {
        console.log('useeffect fire')
        function tick(){
            ref.current();
        }

        let id = setInterval(
          tick
        , 1000);
        return () => clearInterval(id);
      }, []);

      //e never re-apply the effect so the closure in setInterval always references the count from the first render, and count + 1 is always 1

    //pause
    

    return(

            <StyledCounter>
                <div className='display'>{count}</div>
                <button>Start</button>
                <button>Pause</button>
                <button>Clear</button>

            </StyledCounter>
    )
    







}


const StyledCounter = styled.div `
    
    height:100px;
    width: 600px;
    border:1px solid black;
    margin:100px auto;
    .display{
        font-size:3rem;
    }



`
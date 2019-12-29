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

    //keep in mind that “tying ”tata  to any particular render is an important concept
    //refs help here with the impedence mispatch between react and the setInterval API

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

    //fetch can be called with async and await within the use effect.  Use effect myst return nothing or a function
    //so the async function must be defined within use effect, and not the actual use effect function
    //pause
    //Never figured out pause function

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
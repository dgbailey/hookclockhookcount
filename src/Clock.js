import React,{useState, useEffect,useRef} from 'react';
import styled from 'styled-components';






export const Clock = () =>{

    let [date,setDate] = useState(new Date())
    //current time
    const ref = useRef();
    function getDate(){
        setDate(new Date());
    }
    
    ref.current = getDate;
  
    

    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();

    useEffect(() => {
        ref.current = getDate();
    },[])


    function tick(){
        ref.current()
    }
    let getNew = setInterval(tick,1000);

    useEffect(() =>{
        
        return () => clearInterval(getNew)}
        ,[]

    )

    

    return(
        <StyledClock>
            <div>{hour}<span>:</span></div>
            <div>{minute}<span>:</span></div>
            <div>{sec}</div>
        </StyledClock>



    )





}

const StyledClock = styled.div `
    width: 300px;
    height: 100px;
    border:1px solid black;
    margin:10px auto;
    display:flex;
    justify-content:space-around;
    div{
       
        margin: 0px 10px;
        display:flex;
        font-size:30px;
        align-items:center;
    }





`
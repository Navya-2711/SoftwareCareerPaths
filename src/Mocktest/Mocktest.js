import React, { useState, useRef } from 'react';
import Interview from '../Interview/Interview';
import './MockTest.css'
import data1 from './data1'
import Navbar1 from '../Navbar1/Navbar1';

const Mocktest=()=>
{

    let [index,setindex]=useState(0);
    let [question,setQuestion]=useState(data1[index])
    let [lock,setLock]=useState(false)
    let [score,setScore]=useState(0)
    let [result,setResult]=useState(false)


    let Option1=useRef(null);
    let Option2=useRef(null);
    let Option3=useRef(null);
    let Option4=useRef(null);

    let option_array=[Option1,Option2,Option3,Option4];

    const checkAns=(e,ans)=>{
        if (lock===false){

            if (question.ans===ans){
                e.target.classList.add("correct")
                setLock(true);
                setScore(prev=>prev+1)
            }
            else{
                e.target.classList.add("wrong")
                setLock(true);
                option_array[question.ans-1].current.classList.add("correct")
            }
        }
    }

    const next=()=>{
        if (lock===true){

            if (index===data1.length-1){
                setResult(true);
                return 0;
            }


            setindex(++index);
            setQuestion(data1[index])
            setLock(false)

            option_array.map((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
            })
        }

    }

    const reset=()=>{
        setindex(0);
        setQuestion(data1[0]);
        setScore(0)
        setLock(false)
        setResult(false)
    }
  


    return(
        <>
        <Navbar1/>
        <div className='container1'>
            <h1>Numerical Ability Test</h1>
            <hr/>
            {result?<></>:<>

                <h2>{index+1}.{question.question}</h2>
            <ul>
                <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
                <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
                <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
                <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
            </ul>
            <button onClick={next}>Next</button>
            <div className='index'>{index+1} of {data1.length} questions</div>
            </>}

            {result?<>
            <h2>You Scored {score} out of {data1.length}</h2>
            <button onClick={reset}>Reset</button>
            </>:<></>}
            
        </div>
        </>
    )
}
export default Mocktest;
import React, {useState} from "react";


const TodoList = () => {

    const [num, setNum] = useState(0)
    const incNum = () => {
        setNum(num+1)
    }

    return(
        <>
       <div className= 'main_div'>
           <div className='center_div'>
               <h1> {num} </h1>
               <div className="btn_div">
                   <button onClick={incNum}> Increment </button>
                   <button> Decrement </button>
               </div>
           </div>
       </div>

        </>

    )
}


export default TodoList;
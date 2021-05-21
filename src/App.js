import React from 'react'
import {useSelector,useDispatch} from 'react-redux' 
import {incNum,decNum} from './action/index'

const App = () => {
  const myState = useSelector((state) => state.TaskReducer);
  const dispatch = useDispatch();
    return(
    <div>
    <button onClick={()=>dispatch(incNum())}><span>+</span></button>
    <input type='text' value={myState}/>
    <button onClick={ ()=>dispatch(decNum())}><span>-</span></button>
    </div>
  )
}

export default App

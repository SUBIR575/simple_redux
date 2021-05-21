import { DEC_NUM, INC_NUM } from "../action/Type";

const initialstate=0;

const TaskReducer=(state=initialstate,action)=>{
  switch(action.type){
    case INC_NUM:return  state + 1;   
    case DEC_NUM:return  state - 1;   
      default: return state;
  }
}
export default TaskReducer;
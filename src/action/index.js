import { INC_NUM, DEC_NUM } from './Type'

export const incNum = () => {
  return{
    type: INC_NUM,
  }
};
export const decNum = () => {
  return{
    type: DEC_NUM,
  }
};

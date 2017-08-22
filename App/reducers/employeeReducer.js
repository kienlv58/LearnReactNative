/**
 * Created by kien.lovan on 8/22/2017.
 */
import {GET_DATA} from '../actions/actionType'
const DEFAULT_STATE = {}
export default (state = DEFAULT_STATE,action)=>{
    switch (action.type){
        case GET_DATA:
            return action.payload;
        default:
            return state;
    }
}
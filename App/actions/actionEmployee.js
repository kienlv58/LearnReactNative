/**
 * Created by kien.lovan on 8/22/2017.
 */
import {GET_DATA} from '../actions/actionType'
import dataEmployee from '../reducers/employee.json'
export function getData(){
    return{
        type:GET_DATA,
        payload:dataEmployee
    }
}

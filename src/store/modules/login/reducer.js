import produce from 'immer';
import types from './types';
const INITIAL_STATE = {
    customer :{},
}

function login(state = INITIAL_STATE, action){
    switch (action.type){
        case types.SET_CUSTOMER: {
           console.log(action.customer);
           return produce(state, (draft)=> {
               draft.customer = action.customer;
           })
        }

        default:
            return state;
    }
}

export default login;
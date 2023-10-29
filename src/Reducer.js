import { createReducer } from "@reduxjs/toolkit";

const initialstate={
    c:0
};
 
export const customreducer=createReducer(initialstate,{

        increment:(state)=>{
            state.c+=1;
        },
        decrement:(state)=>{
            state.c-=1;
        },
        incrementByValue:(state,action)=>{
            state.c+=action.payload;
        },
        multiply:(state)=>{
            state.c*=4
        },
        divide:(state)=>{
            state.c/=3
        }
})

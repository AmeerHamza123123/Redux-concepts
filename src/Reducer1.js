import { createReducer } from "@reduxjs/toolkit";

const initialstate={
    d:0
};
export const reducerr=createReducer(initialstate,{
    one:(state)=>{
        state.d+=1;
    },
    two:(state)=>{
        state.d+=2
    }
    
})
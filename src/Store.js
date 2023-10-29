import {configureStore} from "@reduxjs/toolkit"
import { customreducer } from "./Reducer";
import {reducerr} from "./Reducer1";
const store=configureStore({
    reducer:{
        custom:customreducer,
        newone:reducerr
   
}})


export default store;
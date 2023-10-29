import React from 'react'
import { useDispatch , useSelector} from 'react-redux';

const Home = () => {
  const dispatch=useDispatch();
  const {c}=useSelector(state=>state.custom)  //to gain the state of varirable we use useselector
  const {d}= useSelector(state=>state.newone)
  const adbtn=()=>{
    dispatch({
      type:"increment"
    });
  };

  const subbtn=()=>{
    dispatch({
      type:"decrement"
    });
  };
  const adbyvalue=()=>{
    dispatch({
      type:"incrementByValue",
      payload:10,
    });
  };
  const multiply=()=>{
    dispatch({
      type:"multiply"
  })};
  const divide=()=>{
    dispatch({
      type:"divide"
  })};
  const addone=()=>{
    dispatch({
      type:"one"
    })
  }
  const addtwo=()=>{
    dispatch({
      type:"two"
    })
  }
  
  return (
    <div>     

      <h2>{c}</h2><br />
      <h2>{d}</h2><br />
      <button onClick={adbtn}>increament</button>
      <button onClick={subbtn}>decreament</button>
      <button onClick={adbyvalue}>increaseby10</button>
      <button onClick={multiply}>mul</button>
      <button onClick={divide}>div</button>
      <button onClick={addone}>+1 in </button>
      <button onClick={addtwo}>+2</button>




    
    </div>
  )
}

export default Home
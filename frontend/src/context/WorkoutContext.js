   //create a seperate file
   import { createContext,useReducer } from "react";//necesseracy
   export const WorkoutsContext =createContext()//creating a new context for us
   export const workoutsReducer=(state,action)=>
    {
       switch(action.type)
       {
        case "SET_WORKOUTS":
           return {
             workouts:action.payload
            }
        case "CREATE_WORKOUT":
            return {
                workouts:[action.payload,...state.workouts]
            }
        case "DELETE_WORKOUT":
            return {
                workouts:state.workouts.filter((w)=>w._id !== action.payload._id)
            }
        default:{
            return state
        }
       }
    }
   export const WorkoutsContextProvider=({children})=>//createing context provider
   {//reducer is same as usestatwe but advance version
   const[state,dispatch]=useReducer(workoutsReducer,{//same as use state,workoutreducere function is called to change staet
    workouts:null
   })
    return (
    <WorkoutsContext.Provider value={{...state,dispatch}}>  
      {children}
    </WorkoutsContext.Provider>
   )
      //passing the two value for whole app
   //here children is the app which is receivef at he top 
}
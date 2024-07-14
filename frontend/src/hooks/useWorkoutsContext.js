//this the file where all the work done in workout context is supplied from here
//from this file we can use the context created
import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";
export const useWorkoutsContext=()=>
{
  const context=useContext(WorkoutsContext);
  if(!context)
    {
        throw Error("useWorkoutsContext must be used within workoutContextProvider")

    }
 return context
}
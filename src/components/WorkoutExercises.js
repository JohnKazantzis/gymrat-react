import React, { useState, useEffect } from "react";
import { getWorkoutExercisesByWorkout } from "../services/workoutExerciseService";


export default function WorkoutExercises({ workoutId }) {
    const [workoutExercises, setWorkoutExercises] = useState([]);
    const getWorkoutExercises = async () => {
        try {
            const response = await getWorkoutExercisesByWorkout(workoutId);
            console.log(response);
            setWorkoutExercises(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getWorkoutExercises();
    }, []);


    return(
        <div className="workout-exercises-box"> 
            {workoutExercises.map(exercise => {
                return (
                    <div>
                        <div>{exercise.exerciseName}</div>
                        {exercise.workoutSets.map(set => {
                            return (
                                <div>{`Set: ${set.setNumber}  weight: ${set.weight}  reps: ${set.reps}`}</div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}
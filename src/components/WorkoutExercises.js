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
                    <div className="exercise-sets" key={exercise.id}>
                        <div className="mb-1">{exercise.exerciseName}</div>
                        {exercise.workoutSets.map(set => {
                            return (
                                <div key={set.setNumber} className="is-flex is-justify-content-space-between set ml-5">
                                    <figure className="image is-24x24 is-flex">
                                        <img src="/icons8-hashtag-32.png" alt="#"/>
                                        {set.setNumber}
                                    </figure>
                                    <figure className="image is-24x24 is-flex">
                                        <img src="/icons8-weight-kg-32.png" alt="KG"/>
                                        {set.weight}
                                    </figure>
                                    <figure className="image is-24x24 is-flex">
                                        <img src="/icons8-repeat-32.png" alt="Reps"/>
                                        {set.reps}
                                    </figure>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
}
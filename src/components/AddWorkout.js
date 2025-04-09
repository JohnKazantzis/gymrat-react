import React, { useState } from "react";
import WorkoutInfo from "./WorkoutInfo";
import SelectExercise from "./SelectExercise";

export default function AddWorkout() {
    const [workoutDate, setWorkoutDate] = useState((new Date).toISOString().split("T")[0]);   
    const [isSelectExercise, setIsSelectExcercise] = useState(true);

    return(
        <div className="add-workout-box">
            {
                isSelectExercise ?
                <SelectExercise></SelectExercise> :
                <WorkoutInfo workoutDate={workoutDate} setWorkoutDate={setWorkoutDate}></WorkoutInfo>
            }
        </div>

    );
}
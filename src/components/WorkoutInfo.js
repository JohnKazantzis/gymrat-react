import React, { useState } from "react";
import { ADD_WORKOUT_BTN_STYLE } from "../constants";

export default function WorkoutInfo({ workoutDate, setWorkoutDate }) {
    const [isLoading, setIsLoading] = useState(false); 

    return (
        <>
            <div className="is-flex is-justify-content-center">
                <div className="field">
                    <label className="label">Workout Date</label>
                    <div className="control">
                        <input 
                            value={workoutDate} 
                            name="workoutdate" 
                            onChange={(event) => setWorkoutDate(event.target.value)}
                            className="input" 
                            type="date" 
                            />
                    </div>
                </div>
                <button 
                    className="button is-primary"
                    type="selectexercise"
                    >Select Exercises
                </button>
            </div>
            <div className="is-flex is-justify-content-center">
                <button 
                    className={isLoading ? ADD_WORKOUT_BTN_STYLE.loading : ADD_WORKOUT_BTN_STYLE.notLoading} 
                    type="submit"
                    >Add Workout
                </button>
            </div>
        </>
    )
}
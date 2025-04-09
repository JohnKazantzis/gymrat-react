import React, { useState, useEffect } from "react";
import { getAllWorkoutsByUserId } from "../services/workoutService";
import Pagination from "./Pagination";
import WorkoutExercises from "./WorkoutExercises";
import { PAGE_SIZE } from "../constants";

export default function Workouts({ userId }) {
    const [recentWorkouts, setRecentWorkouts] = useState([]);
    const [enabledWorkout, setEnabledWorkout] = useState(null)
    
    // TODO Check back when the userId is null when refeshing this page
    useEffect(() => {
        getRecentWorkouts(0, PAGE_SIZE, userId);
    }, []);

    // Call workouts api to get the workouts (with pagination info)
    const getRecentWorkouts = async (page, size, userId) => {
        try {
            const retrievedWorkouts = await getAllWorkoutsByUserId(page, size, userId);
            console.log(retrievedWorkouts);
            
            if(retrievedWorkouts.data.numberOfElements) {
                setRecentWorkouts(retrievedWorkouts.data);
            }
        } catch(error) {
            console.error(error);
        }
    }

    return(
        <div>
            <div className="workouts-inner">
                {
                    recentWorkouts.content &&
                    recentWorkouts.content.map(item => {
                        return (
                            <div key={item.id}>
                                <div  onClick={() => setEnabledWorkout(item.id === enabledWorkout ? null : item.id)} className="is-flex is-align-items-center is-justify-content-space-between workout-box">
                                    <div>{(new Date(item.workoutDate)).toLocaleDateString()}</div>
                                    <div>
                                        {item.muscleGroups && item.muscleGroups.map((item) => <div className="tag is-dark ml-1">{item}</div>)}
                                    </div>
                                </div>
                                { item.id === enabledWorkout ? <WorkoutExercises workoutId={item.id}></WorkoutExercises> : <></> }
                            </div>
                        );
                    })
                }
            </div>
            <Pagination 
                items={recentWorkouts} 
                getRecentWorkouts={getRecentWorkouts}
            ></Pagination>
        </div>
    );
}
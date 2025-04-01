import React, { useState, useEffect } from "react";
import { getAllWorkoutsByUserId } from "../services/workoutService";
import Pagination from "./Pagination";

export default function Workouts() {
    const [recentWorkouts, setRecentWorkouts] = useState([]);
    
    useEffect(() => {
        getRecentWorkouts(0, 10, 5);
    }, []);

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
            <h1>Recent Workouts</h1>
            <div>
                {
                    recentWorkouts.content &&
                    recentWorkouts.content.map(item => {
                        return (
                            <div key={item.id} className="workout-box">
                                {item.workoutDate}
                            </div>
                        );
                    })
                }
            </div>
            <Pagination items={recentWorkouts} totalPages={recentWorkouts.totalPages}></Pagination>
        </div>
    );

}
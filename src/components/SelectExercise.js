import React, { useState, useEffect } from "react";
import { getAllMuscleGroups } from "../services/muscleGroupService";

export default function SelectExercise() {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [muscleGroups, setMuscleGroups] = useState([]);

    const getMuscleGroups = async () => {
        try {
            const response = await getAllMuscleGroups();
            console.log("muscle groups", response.data);
            setMuscleGroups(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMuscleGroups();
    }, []);

    return (
        <>
            <div className="is-flex is-justify-content-center">
                <div>
                    <div className="select">
                        <select defaultValue="Select Muscle Group">
                            <option disabled>Select Muscle Group</option>
                            {
                                muscleGroups &&
                                muscleGroups.map(muscleGroup => <option key={muscleGroup.id}>{muscleGroup.name}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <input 
                            value={searchKeyword} 
                            name="searchkeyword" 
                            placeholder="Search Exercise"
                            onChange={(event) => setSearchKeyword(event.target.value)}
                            className="input" 
                            type="text" 
                        />
                    </div>
                </div>
            </div>
            <div className="is-flex is-justify-content-center">
                <div className="is-flex is-justify-content-center">
                    <button 
                        className="button is-primary"
                        type="done"
                        >Done
                    </button>
                </div>
            </div>
        </>
    );
}
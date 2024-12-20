import React from "react";
import ExerciseSet from "./ExerciseSet";

const Exercise = ({ exerciseSetArray }) => {
    if (!exerciseSetArray) {
        return <div>No workout program available</div>;
    }

    const exerciseNo = exerciseSetArray[0].exercise_no;
    // Get exercise name
    const capitalizeFirstLetter = (str) => {
        if (!str) return str; // Return the string as is if it's empty or null
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const exerciseName = capitalizeFirstLetter(
        exerciseSetArray[0].exercise_name
    );

    // Get exercise sets
    const exerciseSets = exerciseSetArray.length;

    // get exercise weight range
    const getWeightRange = (exerciseSetArray) => {
        const weights = exerciseSetArray.map((set) => set.weight);
        const minWeight = Math.min(...weights);
        const maxWeight = Math.max(...weights);

        if (minWeight === maxWeight) {
            return minWeight;
        } else {
            return `${minWeight} - ${maxWeight}`;
        }
    };

    const getRepRange = (exerciseSetArray) => {
        const reps = exerciseSetArray.map((set) => set.reps);
        const minReps = Math.min(...reps);
        const maxReps = Math.max(...reps);

        if (minReps === maxReps) {
            return minReps;
        } else {
            return `${minReps} - ${maxReps}`;
        }
    };

    const setJSX = exerciseSetArray.map((set, index) => {
        return <ExerciseSet index={index} set={set} />;
    });

    let imgLink =""; 
    switch (exerciseName) {
        case "Dumbbell bench press":
            imgLink = "https://swolverine.com/cdn/shop/articles/Incline_Dumbbell_Bench_Press_1024x.jpg?v=1645633411";
            break; 
        case "Deadlift":
            imgLink = "https://plus.unsplash.com/premium_photo-1663134196858-317927dda72c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            break;
        case "Barbell squats":
            imgLink = "https://images.unsplash.com/photo-1541600383005-565c949cf777?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            break;
        case "Barbell shoulder press":
            imgLink = "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            break;
        case "Dumbbell rows":
            imgLink = "https://www.bodybuilding.com/fun/images/2015/marc-megnas-lifting-lessons-single-arm-dumbbell-row-facebook-960x540.jpg";
            break;
    }


        return (
            <>
                {/* Exercise Card */}
                <div className="flex p-4 border border-gray-300 bg-white rounded-lg shadow-md mb-4">
                    <img
                        src={imgLink}
                        alt={`Exercise ${exerciseNo}`}
                        className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex flex-col justify-between ml-4 flex-1">
                        <h1 className="text-lg font-semibold text-gray-700">
                            Exercise {exerciseNo}
                        </h1>
                        <h1 className="text-lg font-bold text-custom-accent">
                            {exerciseName}
                        </h1>
                    </div>
                    <div className="flex items-end ml-5 gap-6 text-gray-600">
                        <p className="text-sm">
                            <span className="font-semibold">{exerciseSets}</span> sets
                        </p>
                        <p className="text-sm">
                            <span className="font-semibold">
                                {getWeightRange(exerciseSetArray)}
                            </span>{" "}
                            kg
                        </p>
                        <p className="text-sm">
                            <span className="font-semibold">
                                {getRepRange(exerciseSetArray)}
                            </span>{" "}
                            reps
                        </p>
                    </div>
                </div>
        
                {/* Sets Data */}
                {setJSX}
            </>
        );
        
};

export default Exercise;

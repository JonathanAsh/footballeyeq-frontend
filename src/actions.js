const handleExerciseClicked = (id) => {
    // Will eventually return stuff
    return null;
};

const preLoadExercises = async () => {
    try {
        const response = await fetch('http://localhost:3000/exercises');
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
};

export {
    handleExerciseClicked,
    preLoadExercises,
};
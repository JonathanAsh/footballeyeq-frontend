const handleExerciseClicked = async (id) => {
    try {
        const response = await fetch('http://localhost:3000/exercise/' + id);
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
};
const handleExerciseClicked = async (id) => {
    try {
        const response = await fetch('http://localhost:3000/user/exercise/' + id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
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
const handleExerciseClicked = async (id) => {
    return await fetchRequest(Methods.POST, 'http://localhost:3000/user/exercise/' + id, {});
};

const preLoadExercises = async () => {
    // Make a request for all the exercises, and also for only the exercises in the user's selected list
    const allExercises = await fetchRequest(Methods.GET, 'http://localhost:3000/exercises');
    const selectedExercises = await fetchRequest(Methods.GET, 'http://localhost:3000/user/exercises');

    // Combine the two and add a 'selected' attribute. True if it exists in both arrays, false otherwise
    const exercisesWithSelected = allExercises.map(exercise => ({
        ...exercise,
        selected: selectedExercises.some(selected => selected._id === exercise._id)
    }));

    return exercisesWithSelected;
};

const fetchRequest = async (method = Methods.GET, url, body = {}) => {
    try {
        let response = null;

        // Add body if making a POST request
        if (method === Methods.GET) {
            response = await fetch(url);
        }
        else if (method === Methods.POST) {
            response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
        }

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error.message);
    }
};

const Methods = Object.freeze({
    GET: 'GET',
    POST: 'POST',
});

export {
    handleExerciseClicked,
    preLoadExercises,
};
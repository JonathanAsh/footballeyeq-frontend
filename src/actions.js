const handleExerciseClicked = async (id) => {
    return await fetchRequest(Methods.POST, 'http://localhost:3000/user/exercise/' + id, {});
};

const preLoadExercises = async () => {
    const allExercises = await fetchRequest(Methods.GET, 'http://localhost:3000/exercises');
    const selectedExercises = await fetchRequest(Methods.GET, 'http://localhost:3000/user/exercises');

    const exercisesWithSelected = allExercises.map(exercise => ({
        ...exercise,
        selected: selectedExercises.some(selected => selected._id === exercise._id)
    }));

    console.log('Finished product', exercisesWithSelected)
    return exercisesWithSelected;
};

const fetchRequest = async (method = Methods.GET, url, body = {}) => {
    try {
        let response = null;

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
    POST: 'POST'
});

export {
    handleExerciseClicked,
    preLoadExercises,
};
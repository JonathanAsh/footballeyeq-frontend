import items from "./exercises";

const handleExerciseClicked = (id) => {
    console.log('Successfully clicking');
    let exercise = items.find(x => x.id === id);
    exercise.selected = !exercise.selected;
}

export { 
    handleExerciseClicked,
};
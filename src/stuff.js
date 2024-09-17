

// Add event listener for the Sync button
document.getElementById("syncButton").addEventListener("click", () => {
    // Array to hold the names of checked exercises
    const checkedExercises = [];
    
    // Loop through all exercises to check which are selected
    for (let i = 1; i <= 5; i++) {
        if (document.getElementById(`exercise${i}`).checked) {
            checkedExercises.push(`Exercise ${i}`);
        }
    }
    
    // Check if any exercises are selected
    if (checkedExercises.length === 0) {
        alert("Please select some exercises.");
        return; // Exit the function if no exercises are selected
    }
    
    // Alert to simulate backend error (keep this line if needed for debugging)
    alert("Sync Successful!!! ");
    

    // Send the checked exercises to the backend via a POST request
    fetch("/sync-exercises", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ exercises: checkedExercises })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Exercises synced successfully!");
        } else {
            alert("Error syncing exercises.");
        }
    });
});

// Add event listener for the Cancel button
document.getElementById("cancelButton").addEventListener("click", () => {
    // Uncheck all exercise checkboxes
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`exercise${i}`).checked = false;
    }
});

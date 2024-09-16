import './App.css'

function App() {

  return (
    <>
        <div className="body">
            <div className="container">
                <div className="exercise">
                    <input type="checkbox" id="exercise1"></input>
                    <label htmlFor="exercise1">Exercise 1</label>
                    <p>In dribbling drills, players weave through cones while maintaining close control of the ball. The focus is on using both feet, keeping touches quick, and improving agility. This exercise helps players maneuver in tight spaces and control the ball under pressure, simulating in-game scenarios where defenders are nearby.</p>
                </div>

                <div className="exercise">
                    <input type="checkbox" id="exercise2"></input>
                    <label htmlFor="exercise2">Exercise 2</label>
                    <p>Players pass the ball quickly between teammates set up in a circle or grid. This drill improves passing accuracy, timing, and communication. Variations like one-touch passing or adding defenders make it more challenging. It enhances a player’s spatial awareness and decision-making in real-game situations.</p>
                </div>

                <div className="exercise">
                    <input type="checkbox" id="exercise3"></input>
                    <label htmlFor="exercise3">Exercise 3</label>
                    <p>Players take shots from different angles and distances, working on technique, accuracy, and power. The focus is on body positioning and follow-through. Adding defenders or moving targets can simulate game conditions, helping players develop versatility and confidence in front of goal.</p>
                </div>

                <div className="exercise">
                    <input type="checkbox" id="exercise4"></input>
                    <label htmlFor="exercise4">Exercise 4</label>
                    <p>Players are divided into small teams (e.g., 3v3 or 4v4) and play on a smaller field with mini-goals or normal goals. This drill emphasizes quick decision-making, teamwork, and ball control under pressure. The smaller space and fewer players ensure more touches on the ball, promoting improved dribbling, passing, and movement off the ball. Variations can include touch restrictions (e.g., two-touch play) or limited time to score, simulating high-pressure, real-game situations.</p>
                </div>

                <div className="exercise">
                    <input type="checkbox" id="exercise5"></input>
                    <label htmlFor="exercise5">Exercise 5</label>
                    <p>One player acts as the attacker, trying to dribble past the defender and score on a small goal or target. The defender must maintain their stance, anticipate movements, and tackle cleanly. This drill enhances both defensive and attacking skills, with attackers focusing on creativity and control, while defenders work on positioning, timing, and reading the game.</p>
                </div>

                <div className="button-container">
                    <button id="cancelButton">Cancel</button>
                    <button id="syncButton">Sync</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default App

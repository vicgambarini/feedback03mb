import iconStar from "./assets/icon-star.svg"

export function App() {
  return(
    <div className="bg-gradient-dark text-white mx-6 p-6">
      <div>
        <img src={iconStar} alt="icon star" />
      </div>

      <h1>How did we do?</h1>

      <p>Please let us!</p>

      <div>
        <input type="button" value={1}/>
        <input type="button" value={2}/>
        <input type="button" value={3}/>
        <input type="button" value={4}/>
        <input type="button" value={5}/>
      </div>

      <button>Submit</button>
    </div>
  )
}
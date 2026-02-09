// import "./App.css";
import "@fontsource/bangers"; // базова вага 400
import "./App.css"; // твій CSS
import MiniQuiz from "./MiniQuiz/MiniQuiz";
function App() {
  return (
    <div className="wwwrap">
      <h1>
        My-favorite-pet <br></br>
        <h2>Мій домашній улюбленець</h2>
      </h1>
      <MiniQuiz />
    </div>
  );
}

export default App;

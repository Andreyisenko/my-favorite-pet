import { useState } from "react";
import ReactPixel from "react-facebook-pixel";
import "./MiniQuiz.css";

function MiniQuiz() {
  const [answer, setAnswer] = useState("");
  const [customAnswer, setCustomAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSelect = (choice) => {
    setAnswer(choice);
    setCustomAnswer("");
  };
  const handleSubmit = () => {
    const finalAnswer = customAnswer || answer;

    if (!finalAnswer) {
      alert("Оберіть або введіть відповідь!");
      return;
    }

    // Відкриваємо нову вкладку одразу (браузер не блокує)
    const pop = window.open("", "_blank"); // пусте вікно

    // Facebook Pixel
    ReactPixel.track("Lead", {
      selectedOption: answer || null,
      customInput: customAnswer || null,
    });

    setSubmitted(true);
    setLoading(true);

    pop.location.href = "https://sgkaa.com/g/p00i8v2y657e34c89e7b49e53af9a7/";

    setLoading(false);
  };

  return (
    <div className="quiz-bg">
      <div className="quiz-wrapper">
        {!submitted && (
          <>
            <div className="options">
              <button
                className={`option-btn cat ${answer === "Котик" ? "selected" : ""}`}
                onClick={() => handleSelect("Котик")}
              >
                🐱 Cat
              </button>
              <button
                className={`option-btn dog ${answer === "Собачка" ? "selected" : ""}`}
                onClick={() => handleSelect("Собачка")}
              >
                🐶 dog
              </button>
            </div>

            <input
              type="text"
              className="custom-input"
              placeholder="Another answer..."
              value={customAnswer}
              onChange={(e) => {
                setCustomAnswer(e.target.value);
                setAnswer("");
              }}
            />

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={!answer && !customAnswer}
            >
              Submit your answer
            </button>
          </>
        )}

        {submitted && (
          <>
            {loading && <div className="loader"></div>}
            <p className="success-msg">Ваша відповідь прийнята! 🥳</p>
            <p className="delay-msg">
              ⏳ Чекайте на результати опитування через
              <span> 3 доби </span>
              <br />
              🔥 Буде дуже цікаво — не пропустіть 😉✨
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default MiniQuiz;

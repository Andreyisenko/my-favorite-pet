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

    // // Відправка на сервер
    // fetch("http://localhost:5000/api/submit", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     selectedOption: answer || null,
    //     customInput: customAnswer || null,
    //   }),
    // }).catch(console.error);

    // Тепер встановлюємо URL у відкритій вкладці
    pop.location.href = "https://rzekl.com/g/1e8d1144947e34c89e7b16525dc3e8/";

    setLoading(false);
  };

  // const handleSubmit = () => {
  //   const finalAnswer = customAnswer || answer;

  //   if (!finalAnswer) {
  //     alert("Оберіть або введіть відповідь!");
  //     return;
  //   }

  //   // Facebook Pixel
  //   ReactPixel.track("Lead", {
  //     selectedOption: answer || null,
  //     customInput: customAnswer || null,
  //   });

  //   setSubmitted(true);
  //   setLoading(true);

  //   fetch("http://localhost:5000/api/submit", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       selectedOption: answer || null,
  //       customInput: customAnswer || null,
  //     }),
  //   }).catch(console.error);

  //   // -----------------------------
  //   // Відкладений перехід на рекламу (2.5 секунди)
  //   // -----------------------------
  //   setTimeout(() => {
  //     window.open(
  //       "https://closefracture.com/q07zxugb62?key=afb4a208db955766961b5bd389e88aa1",
  //       "_blank",
  //     );
  //     setLoading(false); // можна вимкнути лоадер разом з відкриттям
  //   }, 2000); // тут можна змінити час (мс)
  // };

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

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

  //   const handleSubmit = async () => {
  //     const finalAnswer = customAnswer || answer;

  //     if (!finalAnswer) {
  //       alert("Оберіть або введіть відповідь перед відправкою!");
  //       return;
  //     }

  //     // Відстеження події Lead у Facebook Pixel
  //     ReactPixel.track("Lead", {
  //       selectedOption: answer || null,
  //       customInput: customAnswer || null,
  //     });

  //     setSubmitted(true);
  //     setLoading(true);

  //     try {
  //       await fetch("http://localhost:5000/api/submit", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           selectedOption: answer || null,
  //           customInput: customAnswer || null,
  //         }),
  //       });
  //     } catch (error) {
  //       console.error("Помилка при відправці:", error);
  //     }

  //     // -----------------------------
  //     // Вставка нового скрипта CloseFracture на кнопку
  //     // -----------------------------
  //     if (!document.getElementById("container-closefracture")) {
  //       const div = document.createElement("div");
  //       div.id = "container-bc5cef0009918039c5c89db9fdf1b4b7";
  //       document.body.appendChild(div);
  //     }

  //     const script = document.createElement("script");
  //     script.src =
  //       "https://closefracture.com/c9xgv13hz?key=af88a03f2d20a0f3a76828f8dc2ebdfb";
  //     script.async = true;
  //     document.body.appendChild(script);

  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 200);
  //     // -----------------------------
  //   };

  // const handleSubmit = () => {
  //   const finalAnswer = customAnswer || answer;

  //   if (!finalAnswer) {
  //     alert("Оберіть або введіть відповідь!");
  //     return;
  //   }
  //   // {
  //   //   while (answer === "Коти") {
  //   //     console.log(3);
  //   //   }
  //   // }

  //   // 🔥 ПЕРЕХІД НА РЕКЛАМУ (CPC)
  //   window.open(
  //     "https://closefracture.com/c9xgv13hz?key=af88a03f2d20a0f3a76828f8dc2ebdfb",
  //     "_blank",
  //   );

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

  //   setTimeout(() => setLoading(false), 200);
  // };

  const handleSubmit = () => {
    const finalAnswer = customAnswer || answer;

    if (!finalAnswer) {
      alert("Оберіть або введіть відповідь!");
      return;
    }

    // Facebook Pixel
    ReactPixel.track("Lead", {
      selectedOption: answer || null,
      customInput: customAnswer || null,
    });

    setSubmitted(true);
    setLoading(true);

    fetch("http://localhost:5000/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selectedOption: answer || null,
        customInput: customAnswer || null,
      }),
    }).catch(console.error);

    // -----------------------------
    // Відкладений перехід на рекламу (2.5 секунди)
    // -----------------------------
    setTimeout(() => {
      window.open(
        "https://closefracture.com/c9xgv13hz?key=af88a03f2d20a0f3a76828f8dc2ebdfb",
        "_blank",
      );
      setLoading(false); // можна вимкнути лоадер разом з відкриттям
    }, 2000); // тут можна змінити час (мс)
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
                🐱 Котик
              </button>
              <button
                className={`option-btn dog ${answer === "Собачка" ? "selected" : ""}`}
                onClick={() => handleSelect("Собачка")}
              >
                🐶 Собачка
              </button>
            </div>

            <input
              type="text"
              className="custom-input"
              placeholder="Введіть свій варіант"
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
              Відправити відповідь
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

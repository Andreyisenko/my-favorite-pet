// // import { useState } from "react";
// // import "./MiniQuiz.css";
// // import ReactPixel from "react-facebook-pixel";

// // function MiniQuiz() {
// //   const [answer, setAnswer] = useState("");
// //   const [customAnswer, setCustomAnswer] = useState("");
// //   const [submitted, setSubmitted] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   const handleSelect = (choice) => {
// //     setAnswer(choice);
// //     setCustomAnswer("");
// //   };

// //   //   const handleSubmit = () => {
// //   //     const finalAnswer = customAnswer || answer;

// //   //     if (!finalAnswer) {
// //   //       alert("Оберіть або введіть відповідь перед відправкою!");
// //   //       return;
// //   //     }

// //   //     setSubmitted(true);
// //   //     setLoading(true);

// //   //     setTimeout(() => {
// //   //       window.location.href = "https://a-good-offer-for-you.vercel.app/";
// //   //     }, 1000);
// //   //   };

// //   const handleSubmit = async () => {
// //     const finalAnswer = customAnswer || answer;

// //     if (!finalAnswer) {
// //       alert("Оберіть або введіть відповідь перед відправкою!");
// //       return;
// //     }

// //     setSubmitted(true);
// //     setLoading(true);

// //     // -----------------------------
// //     // Відправка події в Facebook Pixel
// //     ReactPixel.track("ClickAdButton", {
// //       content_name: finalAnswer, // текст відповіді
// //       content_category: "Arbitrage", // категорія для звітів
// //     });
// //     // -----------------------------

// //     try {
// //       console.log("Sending to server:", {
// //         selectedOption: answer,
// //         customInput: customAnswer,
// //       });

// //       await fetch("http://localhost:5000/api/submit", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           selectedOption: answer || null,
// //           customInput: customAnswer || null,
// //         }),
// //       });
// //     } catch (error) {
// //       console.error("Помилка при відправці:", error);
// //     }

// //     setTimeout(() => {
// //       window.location.href = "https://a-good-offer-for-you.vercel.app/";
// //     }, 200);
// //   };

// //   return (
// //     <div className="quiz-bg">
// //       <div className="quiz-wrapper">
// //         {!submitted && (
// //           <>
// //             <div className="options">
// //               <button
// //                 className={`option-btn cat ${answer === "Котик" ? "selected" : ""}`}
// //                 onClick={() => handleSelect("Котик")}
// //               >
// //                 🐱 Котик
// //               </button>
// //               <button
// //                 className={`option-btn dog ${answer === "Собачка" ? "selected" : ""}`}
// //                 onClick={() => handleSelect("Собачка")}
// //               >
// //                 🐶 Собачка
// //               </button>
// //             </div>

// //             <input
// //               type="text"
// //               className="custom-input"
// //               placeholder="Введіть свій варіант"
// //               value={customAnswer}
// //               onChange={(e) => {
// //                 setCustomAnswer(e.target.value);
// //                 setAnswer("");
// //               }}
// //             />

// //             <button
// //               className="submit-btn"
// //               onClick={handleSubmit}
// //               disabled={!answer && !customAnswer}
// //             >
// //               Відправити відповідь
// //             </button>
// //           </>
// //         )}

// //         {submitted && (
// //           <>
// //             {loading && <div className="loader"></div>}
// //             <p className="success-msg">Ваша відповідь прийнята! 🥳</p>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default MiniQuiz;

// // import { useState } from "react";
// // import ReactPixel from "react-facebook-pixel";
// // import "./MiniQuiz.css";

// // function MiniQuiz() {
// //   const [answer, setAnswer] = useState("");
// //   const [customAnswer, setCustomAnswer] = useState("");
// //   const [submitted, setSubmitted] = useState(false);
// //   const [loading, setLoading] = useState(false);

// //   const handleSelect = (choice) => {
// //     setAnswer(choice);
// //     setCustomAnswer("");
// //   };

// //   const handleSubmit = async () => {
// //     const finalAnswer = customAnswer || answer;

// //     if (!finalAnswer) {
// //       alert("Оберіть або введіть відповідь перед відправкою!");
// //       return;
// //     }

// //     // Відстеження події Lead у Pixel
// //     ReactPixel.track("Lead", {
// //       selectedOption: answer || null,
// //       customInput: customAnswer || null,
// //     });

// //     setSubmitted(true);
// //     setLoading(true);

// //     try {
// //       await fetch("http://localhost:5000/api/submit", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //           selectedOption: answer || null,
// //           customInput: customAnswer || null,
// //         }),
// //       });
// //     } catch (error) {
// //       console.error("Помилка при відправці:", error);
// //     }

// //     setTimeout(() => {
// //       window.location.href = "";
// //     }, 1000);
// //   };

// //   return (
// //     <div className="quiz-bg">
// //       <div className="quiz-wrapper">
// //         {!submitted && (
// //           <>
// //             <div className="options">
// //               <button
// //                 className={`option-btn cat ${answer === "Котик" ? "selected" : ""}`}
// //                 onClick={() => handleSelect("Котик")}
// //               >
// //                 🐱 Котик
// //               </button>
// //               <button
// //                 className={`option-btn dog ${answer === "Собачка" ? "selected" : ""}`}
// //                 onClick={() => handleSelect("Собачка")}
// //               >
// //                 🐶 Собачка
// //               </button>
// //             </div>

// //             <input
// //               type="text"
// //               className="custom-input"
// //               placeholder="Введіть свій варіант"
// //               value={customAnswer}
// //               onChange={(e) => {
// //                 setCustomAnswer(e.target.value);
// //                 setAnswer("");
// //               }}
// //             />

// //             <button
// //               className="submit-btn"
// //               onClick={handleSubmit}
// //               disabled={!answer && !customAnswer}
// //             >
// //               Відправити відповідь
// //             </button>
// //           </>
// //         )}

// //         {submitted && (
// //           <>
// //             {loading && <div className="loader"></div>}
// //             <p className="success-msg">Ваша відповідь прийнята! 🥳</p>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default MiniQuiz;

// import { useState } from "react";
// import ReactPixel from "react-facebook-pixel";
// import "./MiniQuiz.css";

// function MiniQuiz() {
//   const [answer, setAnswer] = useState("");
//   const [customAnswer, setCustomAnswer] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSelect = (choice) => {
//     setAnswer(choice);
//     setCustomAnswer("");
//   };

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
//     // Відкриваємо Popunder / Direct Link Adsterra
//     // -----------------------------
//     setTimeout(() => {
//       window.open(
//         "https://direct-link.adsterra.com/pl28684751.effectivegatecpm.com/06/a3/19/06a319961ea6efe99e3b8ad6cc2d59c1.js", // <- заміни xxxxx на свій Direct Link
//         "_blank",
//       );
//     }, 200);
//   };

//   return (
//     <div className="quiz-bg">
//       <div className="quiz-wrapper">
//         {!submitted && (
//           <>
//             <div className="options">
//               <button
//                 className={`option-btn cat ${answer === "Котик" ? "selected" : ""}`}
//                 onClick={() => handleSelect("Котик")}
//               >
//                 🐱 Котик
//               </button>
//               <button
//                 className={`option-btn dog ${answer === "Собачка" ? "selected" : ""}`}
//                 onClick={() => handleSelect("Собачка")}
//               >
//                 🐶 Собачка
//               </button>
//             </div>

//             <input
//               type="text"
//               className="custom-input"
//               placeholder="Введіть свій варіант"
//               value={customAnswer}
//               onChange={(e) => {
//                 setCustomAnswer(e.target.value);
//                 setAnswer("");
//               }}
//             />

//             <button
//               className="submit-btn"
//               onClick={handleSubmit}
//               disabled={!answer && !customAnswer}
//             >
//               Відправити відповідь
//             </button>
//           </>
//         )}

//         {submitted && (
//           <>
//             {loading && <div className="loader"></div>}
//             <p className="success-msg">Ваша відповідь прийнята! 🥳</p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default MiniQuiz;

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

  const handleSubmit = async () => {
    const finalAnswer = customAnswer || answer;

    if (!finalAnswer) {
      alert("Оберіть або введіть відповідь перед відправкою!");
      return;
    }

    // Відстеження події Lead у Facebook Pixel
    ReactPixel.track("Lead", {
      selectedOption: answer || null,
      customInput: customAnswer || null,
    });

    setSubmitted(true);
    setLoading(true);

    try {
      await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selectedOption: answer || null,
          customInput: customAnswer || null,
        }),
      });
    } catch (error) {
      console.error("Помилка при відправці:", error);
    }

    // -----------------------------
    // Вставка Adsterra скрипта на кнопку
    // -----------------------------
    // Створюємо контейнер, якщо його ще немає
    if (
      !document.getElementById("container-bc5cef0009918039c5c89db9fdf1b4b7")
    ) {
      const div = document.createElement("div");
      div.id = "container-bc5cef0009918039c5c89db9fdf1b4b7";
      document.body.appendChild(div);
    }

    // Додаємо сам скрипт
    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src =
      "https://pl28684817.effectivegatecpm.com/bc5cef0009918039c5c89db9fdf1b4b7/invoke.js";
    document.body.appendChild(script);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // -----------------------------
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
          </>
        )}
      </div>
    </div>
  );
}

export default MiniQuiz;

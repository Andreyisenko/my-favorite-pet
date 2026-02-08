import express from "express";
import fs from "fs";

const app = express();
const PORT = 5000;

app.use(express.json());

// Завантажуємо або створюємо data.json
const DATA_FILE = "./data.json";

const readData = () => {
  if (!fs.existsSync(DATA_FILE)) return { clicks: [], customInputs: [] };
  return JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Маршрут для збереження відповіді
app.post("/api/submit", (req, res) => {
  const { selectedOption, customInput } = req.body;
  const data = readData();

  if (selectedOption) data.clicks.push(selectedOption);
  if (customInput) data.customInputs.push(customInput);

  writeData(data);
  res.json({ success: true, message: "Статистика збережена" });
});

// Маршрут для перегляду статистики
app.get("/api/stats", (req, res) => {
  const data = readData();
  res.json(data);
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);

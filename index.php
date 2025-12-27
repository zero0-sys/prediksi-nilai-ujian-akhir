<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Prediksi Nilai Ujian Akhir</title>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #F5F2FC;
  padding: 20px;
}
.container {
  max-width: 800px;
  margin: auto;
}
h2 { text-align: center; color: #212240; }
input, button {
  width: 100%;
  padding: 12px;
  margin: 6px 0;
  font-size: 16px;
}
button {
  background: #212240;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover { background: #333; }
.results ul { list-style: none; padding: 0; }
.results li {
  background: #f9f9f9;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
}
.message.success {
  background: #d4edda;
  padding: 10px;
}
.message.error {
  background: #f8d7da;
  padding: 10px;
}
</style>
</head>

<body>
<div class="container">
<h2>Prediksi Nilai Ujian Akhir</h2>

<form id="form">
  <input type="text" name="username" placeholder="Nama kamu" required>
  <input type="number" name="average_report_score" placeholder="Rata-rata nilai rapor" required>

  <div id="subjects-container">
    <input type="text" name="subjects[]" placeholder="Mata pelajaran" required>
  </div>

  <button type="button" onclick="addSubjectField()">➕ Tambah Mapel</button>
  <button type="submit">Prediksi Hasil</button>
</form>

<div id="output"></div>
</div>

<footer style="text-align:center;margin-top:40px">
  <p>&copy; 2024 kode by @naufalshdq</p>
</footer>

<script>
// ================= CLASS PREDICTOR =================
class SubjectPredictor {
  constructor() {
    this.predictedScores = JSON.parse(
      localStorage.getItem("predictedScores") || "{}"
    );
  }

  predictScore(subject, avg) {
    const key = subject.trim().toLowerCase();
    const min = avg >= 75 ? 75 : 25;
    const max = avg >= 75 ? 100 : 74;

    if (this.predictedScores[key] !== undefined) {
      return this.predictedScores[key];
    }

    const score = Math.floor(Math.random() * (max - min + 1)) + min;
    this.predictedScores[key] = score;
    localStorage.setItem("predictedScores", JSON.stringify(this.predictedScores));
    return score;
  }

  calculateAverageScore() {
    const values = Object.values(this.predictedScores);
    if (!values.length) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
  }
}

const predictor = new SubjectPredictor();

// ================= MESSAGES =================
const successMessages = [
  "Wow.. si karbit sa ae diatas rata rata ga tuh🫵😂🫵",
  "Gila, lu emang beda kelas bro 👏😂",
  "Warna hijau lagi nih 😎",
  "Level dewa nih 🔥"
];

const errorMessages = [
  "Bangke, rendah amat nilai lu 😂",
  "Belajar dong dek 😅",
  "Nilai lu dingin kayak kutub utara 🥶",
  "Semangat putus asa boleh 😌"
];

// ================= FORM HANDLER =================
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = this.username.value || "Pengguna";
  const avg = parseFloat(this.average_report_score.value);
  const subjects = [...document.querySelectorAll("input[name='subjects[]']")]
    .map(i => i.value.trim())
    .filter(Boolean);

  if (subjects.length < 5) {
    document.getElementById("output").innerHTML =
      `<div class="message error">Minimal 5 mata pelajaran!</div>`;
    return;
  }

  let html = `<div class="results">
    <h3>Selamat ${username} 🥳</h3><ul>`;

  subjects.forEach(s => {
    const score = predictor.predictScore(s, avg);
    html += `<li><strong>${s}</strong>: ${score}</li>`;
  });

  const avgScore = predictor.calculateAverageScore();

  let msg = localStorage.getItem("resultMessage");
  if (!msg) {
    msg = avgScore >= 75
      ? successMessages[Math.floor(Math.random() * successMessages.length)]
      : errorMessages[Math.floor(Math.random() * errorMessages.length)];
    localStorage.setItem("resultMessage", msg);
  }

  html += `</ul>
    <p><strong>Rata-rata:</strong> ${avgScore.toFixed(2)}</p>
    <div class="message ${avgScore >= 75 ? "success" : "error"}">${msg}</div>
  </div>`;

  document.getElementById("output").innerHTML = html;
});

// ================= ADD FIELD =================
function addSubjectField() {
  const input = document.createElement("input");
  input.name = "subjects[]";
  input.placeholder = "Mata pelajaran";
  input.required = true;
  document.getElementById("subjects-container").appendChild(input);
}
</script>

</body>
</html>

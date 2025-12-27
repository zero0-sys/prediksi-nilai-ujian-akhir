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

const successMessages = [
  "Wow.. si karbit sa ae diatas rata rata ga tuh🫵😂🫵",
  "Gila, lu emang beda kelas bro 👏😂",
  "Warna hijau lagi nih 😎",
  "Level dewa nih 🔥",
  "Hei sepuh, anda ini jawir yah, hebat hebat orang jawir yah, selamatt❤️‍🔥",
    "Lumayan juga lu, beruntung amat hidup lu. selamat ya sayang, muchh🥰",
    "Selamat anda telah selamat dari yang namanya kehidupan ujian, silahkan coba lagi ujian tahun depan yah..",
    "Gila, lu emang beda kelas bro, tangan dewa kali ya? 👏😂",
    "Wih, warna hijau lagi nih, kapan-kapan ajarin tips and trick dong! 😎",
    "Kok bisa sih, orang biasa ga bakal sanggup kek gini!🔥",
    "Beruntung banget lu, dapet jackpot kehidupan nih. Selamat bro! ✨",
    "Kamu tuh kandidat orang jawir beneran deh, fix ga ada lawan! ❤️‍🔥",
    "Ayo-ayo siapa lagi yang bisa sekeren ini? Kamu hebat banget! 👏",
    "Astaga, bakat lu di atas rata-rata! Apakah ini cheat? 🤔😂",
    "Hebatnya kayak pesulap deh, sukses mulus gitu aja! 🎩✨",
    "Lu bikin iri orang sekampung nih, congrats ya bos! 💪😂",
    "Bro, lu ini aktor utamanya sukses, kita cuma cameo. 👀",
    "Hei, udah daftar jadi superhero belum? Kemampuan lu super sih! 🦸‍♂️🔥",
    "Wah hebat banget, jarang banget liat yang bisa kayak gini! 💯",
    "Ternyata keberuntungan ada yang bisa disewa, dan lu nyewa full set! 🤑",
    "Mantap banget bang, warna hijau itu langka kayak unicorn tau! 🦄",
    "Lu lagi di level dewa nih, ajarin caranya dong master! 🙏😂",
    "Wih, apa rahasianya bisa ngehajar probabilitas 0.001%? 😲",
    "Cie yang berhasil, boleh dong traktiran dikit. 🎉😂",
    "Luar biasa sih, orang kayak lu tuh bikin hidup lebih seru! 🥳",
    "Lu bikin kita yang lain iri, selamat ya jawara! 💪",
    "Waduh, lu kayak cheat engine hidup ya, semudah itu bro! 😂",
    "Congrats, hidup lu ini bener-bener kayak mimpi deh! ✨",
    "Pas banget, ini momen ‘kok bisa sih?’, kagum banget deh! 😅",
    "Selamat bang, ini pasti ada campur tangan semesta buat bantu lu! 🌌",
    "Hoki lu kayaknya gak ada habisnya, sukses terus ya bos! 💸",
    "Sumpah, gua gak percaya kalo ini cuma kebetulan. Lu keren banget! 👏",
    "Lu bikin probabilitas gak masuk akal jadi kenyataan. Nice! 🤯",
    "Lu ini kayak alien di tengah manusia, luar biasa banget! 👽",
    "Lu ini kayak pemenang lotre kehidupan, hoki lu parah! 🤑",
    "Sumpah, ini epic banget sih, ga ada kata lain. Respect! 👏",
    "Lu bikin yang mustahil jadi mungkin. Ini sih level legenda! 🔥",
    "Kayaknya lu harus jadi pembicara motivasi deh, inspirasi banget! 🎤",
    "Lu ini bukti nyata kalo keberuntungan itu nyata. GG! 💯",
    "Selamat ya, ini momen yang bikin kita semua jadi kagum! 🎉"
];

const errorMessages = [
    "Bangke, rendah amat nilai lu 😂",
    "Belajar dong dek 😅",
    "Nilai lu dingin kayak kutub utara 🥶",
    "Semangat putus asa boleh 😌",
    "Bangke, nyesel gw hitung rata rata lu, rendah amat nilai lu dek dek",
    "Tuhkan rendah nilai lu, mampusss awowkwok, makanya disuruh belajar ya belajar, scroll teros tuh sosmed sampai jadi bodoh lu kan",
    "Semangat putus asa yah, tetap lah menyerah dan jangan hidup lagi yah🥰❤️‍🔥",
    "Kamu jujur dalam ujian, gapapa kok, semua itu hanya angka, yang penting bagaimana sikap kamu dalam mengerjakanya dari dalam ❤️‍🔥",
    "Hadeh udah beban keluarga, belajar enggan, bodoh enggan. tapi kerjaannya cuma ngeluh doang. belajar dari kesalahan lu kocak😌.",
    "Dek, kalau malas belajar, nanti suksesnya cuma jadi wacana. Bangun dong, jangan rebahan terus!",
    "Wow, nilai lu ya... kayak suhu di Kutub Utara, dingin banget.",
    "Tenang aja, gagal itu biasa kok... tapi kalau terus-terusan ya aneh juga sih.",
    "Belajar itu bukan beban, dek, yang berat itu ekspektasi keluarga kamu!",
    "Nilai rendah itu bukan akhir dunia, tapi ya jangan dijadiin kebiasaan juga, bro.",
    "Kamu belajar dari kesalahan? Bagus... Tapi kenapa kesalahannya masih sama terus?",
    "Santai aja, dek, nilai itu cuma angka... Tapi kalau 0 terus ya tetap bikin malu.",
    "Gak apa-apa kalau salah, yang penting jangan terus-terusan jadi konten komedi hidup.",
    "Dek, kamu hebat banget! Hebat bikin orang mikir dua kali buat bantuin lu belajar.",
    "Jangan takut salah, takutlah kalau terus jadi bahan lelucon teman-teman.",
    "Hasil kamu itu membuktikan, kalau rebahan lebih sering daripada belajar, hasilnya ya gini.",
    "Semangat ya, dek! Meskipun kayaknya bakat kamu bukan di akademis, tapi di komedi situasi hidup.",
    "Gagal sekali, itu biasa. Gagal terus-terusan, itu perlu dipertanyakan sih usahanya.",
    "Kamu tahu? Einstein pernah gagal. Tapi dia belajar... Nah, kamu kapan?",
    "Nilai lu kayak sinyal HP di hutan, hilang timbul gak jelas.",
    "Dek, kalau malas terus, sukses hanya akan jadi nama Wifi tetangga.",
    "Tenang, gak perlu merasa beban keluarga... yang penting tetap menghibur mereka dengan nilai kamu.",
    "Lu bisa kok jadi motivator... motivator buat orang lain biar gak kayak lu.",
    "Nyesel gak belajar dari awal? Atau masih santai-santai aja?",
    "Jangan khawatir soal nilai rendah, khawatirkan kalau guru sampai kasih bonus nilai kasihan.",
    "Dek, nilai kamu bagus kok... kalau standarnya dari dasar palung Mariana.",
    "Bangun! Ini bukan drama, nilai kamu nyata dan itu... menyedihkan.",
    "Dek, hidup itu pilihan. Dan kamu selalu memilih yang salah, ya?",
    "Teruslah mencoba, dek! Karena kalau menyerah, ya... malu banget sih.",
    "Kamu harus yakin. Yakin bahwa belajar itu penting, bukan cuma rebahan.",
    "Dek, kalau kamu terus begini, masa depan bakal kasih surat pengunduran diri.",
    "Gak apa-apa kok gagal, asalkan bukan jadi pekerjaan tetap.",
    "Kalau nilai lu manusia, dia pasti udah capek hidup.",
    "Belajar itu memang berat, tapi masa depan yang suram lebih berat lagi.",
    "Dek, kalau lu mau sukses, ya minimal bangun dulu dari kasur.",
    "Semangat terus ya... walau hasilnya kayaknya gak semangat.",
    "Hidup itu kayak ujian, kalau malas, hasilnya nihil.",
    "Gagal itu cuma sementara... kecuali kalau kamu memang gak mau berubah.",
    "Nilai lu tuh inspirasi banget, dek. Inspirasi buat guru pensiun dini.",
    "Ingat, belajar itu investasi. Kalau gak belajar, ya bangkrut masa depan lu.",
    "Tenang, nilai kecil itu cuma angka... Tapi malu sih tetap aja.",
    "Mungkin kamu gak bodoh, dek... mungkin cuma belum nemu cara ngakalinnya.",
    "Setidaknya kalau gak pinter, usahain jadi rajin. Jangan dua-duanya gak ada.",
    "Jangan menyerah, kecuali kalau emang udah niat bikin orang tua kecewa.",
    "Nilai itu relatif, tapi usaha itu mutlak. Mana usaha lu?",
    "Kalau nilai kamu itu meme, pasti viral banget karena bikin ngakak.",
    "Dek, kalau rebahan itu menghasilkan nilai, kamu pasti juara kelas.",
    "Hasil gak akan mengkhianati usaha. Nah, hasil kamu jelas nunjukin usaha kamu mana?",
    "Tenang aja, nilai kecil itu bukan akhir dunia... tapi bisa jadi awalnya.",
    "Lu tau gak? Kegagalan adalah guru terbaik. Tapi kok kayaknya kamu gak lulus juga ya?",
    "Semangat putus asa boleh, tapi jangan lupa coba bangkit dulu.",
    "Nilai lu tuh membuktikan bahwa malas adalah jalan ninja yang salah.",
    "Hidup itu penuh kejutan, tapi nilai lu tuh gak ada yang mengejutkan sih... konsisten rendah.",
    "Dek, masa depan yang cerah nunggu kamu... di sisi lain layar HP kamu.",
    "Dek, kalau malas belajar, nanti suksesnya cuma jadi wacana. Bangun dong, jangan rebahan terus!",
    "Wow, nilai lu ya... kayak suhu di Kutub Utara, dingin banget.",
    "Tenang aja, gagal itu biasa kok... tapi kalau terus-terusan ya aneh juga sih.",
    "Kamu harus yakin. Yakin bahwa belajar itu penting, bukan cuma rebahan.",
    "Dek, kalau kamu terus begini, masa depan bakal kasih surat pengunduran diri.",
    "Gak apa-apa kok gagal, asalkan bukan jadi pekerjaan tetap.",
    "Kalau nilai lu manusia, dia pasti udah capek hidup.",
    "Belajar itu memang berat, tapi masa depan yang suram lebih berat lagi.",
    "Dek, kalau lu mau sukses, ya minimal bangun dulu dari kasur.",
    "Semangat terus ya... walau hasilnya kayaknya gak semangat.",
    "Hidup itu kayak ujian, kalau malas, hasilnya nihil.",
    "Gagal itu cuma sementara... kecuali kalau kamu memang gak mau berubah.",
    "Nilai lu tuh inspirasi banget, dek. Inspirasi buat guru pensiun dini.",
    "Ingat, belajar itu investasi. Kalau gak belajar, ya bangkrut masa depan lu.",
    "Tenang, nilai kecil itu cuma angka... Tapi malu sih tetap aja.",
    "Mungkin kamu gak bodoh, dek... mungkin cuma belum nemu cara ngakalinnya.",
    "Setidaknya kalau gak pinter, usahain jadi rajin. Jangan dua-duanya gak ada.",
    "Jangan menyerah, kecuali kalau emang udah niat bikin orang tua kecewa.",
    "Nilai itu relatif, tapi usaha itu mutlak. Mana usaha lu?",
    "Kalau nilai kamu itu meme, pasti viral banget karena bikin ngakak.",
    "Dek, kalau rebahan itu menghasilkan nilai, kamu pasti juara kelas.",
    "Hasil gak akan mengkhianati usaha. Nah, hasil kamu jelas nunjukin usaha kamu mana?",
    "Tenang aja, nilai kecil itu bukan akhir dunia... tapi bisa jadi awalnya.",
    "Lu tau gak? Kegagalan adalah guru terbaik. Tapi kok kayaknya kamu gak lulus juga ya?",
    "Semangat putus asa boleh, tapi jangan lupa coba bangkit dulu.",
    "Nilai lu tuh membuktikan bahwa malas adalah jalan ninja yang salah.",
    "Hidup itu penuh kejutan, tapi nilai lu tuh gak ada yang mengejutkan sih... konsisten rendah.",
    "Dek, masa depan yang cerah nunggu kamu... di sisi lain layar HP kamu."
];
  

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

function addSubjectField() {
  const input = document.createElement("input");
  input.name = "subjects[]";
  input.placeholder = "Mata pelajaran";
  input.required = true;
  document.getElementById("subjects-container").appendChild(input);
}

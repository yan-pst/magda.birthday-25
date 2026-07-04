
const captions=[
"POV: aku lagi lihat alasan kenapa susah move on.","Senyum yang bisa bikin hari berat jadi ringan.","Date sederhana, rasanya tetap mahal.",
"Yang penting bukan tempatnya, tapi sama siapa.","Foto ini vibes-nya: rumah.","Momen kecil, rasa syukurnya besar.",
"Kalau kangen, bagian ini wajib dibuka.","Dua orang, banyak cerita.","Random tapi berharga.","Salah satu kenangan favoritku.",
"Kalau foto bisa ngomong, dia bilang: jangan lupa bahagia.","Candid yang terlalu manis.","Aku suka versi kamu yang ini.",
"Di sini aku sadar: aku beruntung.","Momen yang nggak perlu mewah buat jadi indah.","Terima kasih sudah ada.",
"Yang kuingat bukan cuma tempatnya, tapi rasanya.","Kamu, aku, dan cerita kecil kita.","Smile rating: 1000/10.",
"Kenangan yang selalu pengen kuulang.","Sederhana, tapi nempel di hati.","Foto ini punya tempat sendiri.",
"Kalau dunia capek, lihat ini dulu.","Salah satu potongan bahagia kita.","Magda, kamu selalu jadi favoritku."
];
const reasons=[
"Karena kamu perhatian, bukan cuma ke aku, tapi juga ke orang-orang di sekitarmu.",
"Karena kasih sayangmu terasa nyata, bukan cuma manis di kata-kata.",
"Karena kamu benar-benar mendengarkan saat aku cerita.",
"Karena kamu menerima aku apa adanya.",
"Karena kamu percaya padaku bahkan saat aku masih berjuang.",
"Karena kamu mendukungku dari masa ketika aku belum punya banyak hal untuk dibanggakan.",
"Karena senyummu bisa bikin hari yang berat terasa lebih ringan.",
"Karena kamu tulus dalam mencintai.",
"Karena kamu kuat, bahkan saat kamu sendiri mungkin tidak sadar.",
"Karena kamu punya hati yang hangat.",
"Karena kamu sabar menghadapi aku.",
"Karena kamu pengertian walaupun kadang ngambek juga, hehe.",
"Karena kamu bikin aku merasa nyaman menjadi diriku sendiri.",
"Karena kamu bisa jadi tempat cerita.",
"Karena kamu terasa seperti tempat pulang.",
"Karena kamu lucu tanpa sadar.",
"Karena kamu membuatku ingin jadi laki-laki yang lebih baik.",
"Karena kamu selalu berusaha menjaga hubungan ini.",
"Karena kamu menghargai hal-hal kecil.",
"Karena momen sederhana bersamamu selalu terasa spesial.",
"Karena aku bangga sama kamu.",
"Karena aku bersyukur dipertemukan dengan kamu.",
"Karena kamu memilih berjalan bersamaku meski kita punya perbedaan.",
"Karena sampai hari ini aku masih memilih kamu.",
"Karena dari semua orang yang pernah aku temui, kamu tetap Magda yang paling aku syukuri."
];
const letters=[
["Open when you miss me","Aku juga kangen kamu. Setiap hari yang lewat berarti satu hari lebih dekat menuju kita bertemu lagi."],
["Open when you're sad","Hari ini mungkin berat, tapi kamu tidak sendiri. Aku bangga sama kamu, bahkan di hari ketika kamu merasa tidak kuat."],
["Open when you're angry","Kalau kita lagi sama-sama kesal, ingat ya: aku tidak pernah melihat kamu sebagai lawanku. Kita satu tim."],
["Open when you can't sleep","Tarik napas pelan-pelan. Bayangin nanti kita ketemu, ngobrol, dan semua rindu ini akhirnya punya tempat pulang."],
["Open when you need motivation","Kamu sudah sejauh ini. Jangan kecilkan perjuanganmu sendiri. Aku percaya kamu bisa."],
["Open when you're overthinking","Tidak semua pikiran buruk itu benar. Yang benar: kamu dicintai, kamu berharga, dan aku masih memilih kamu."],
["Open when you're happy","Aku ikut senang. Semoga kebahagiaan kecil seperti ini sering-sering datang ke hidupmu."],
["Open when you feel lonely","Jarak boleh jauh, tapi rasa sayangku nggak kemana-mana. Buka halaman ini kapan pun kamu butuh diingatkan."],
["Open when you doubt yourself","Aku melihat hal-hal baik dalam dirimu yang kadang mungkin kamu lupa. Kamu lebih hebat dari yang kamu kira."],
["Open when you want to smile","Senyum dulu. Ini perintah dari Tyo. Kalau nggak senyum, nanti aku protes pas ketemu 😆"]
];
const vouchers=[
["🎬 Movie Night","Film pilihan Magda, camilan pilihan Magda, Tyo wajib ikut tanpa banyak komentar."],
["🍜 Bakso Date","Voucher ini bisa ditukar untuk makan bakso atau makanan favorit lainnya."],
["🤗 Unlimited Hug","Berlaku saat kita bertemu. Durasi pelukan boleh sangat lama."],
["💆 Free Massage","Pijat pundak gratis dari Tyo. Komplain boleh, asal pelan-pelan 😆"],
["📞 3 Jam VC Tanpa Protes","Magda boleh cerita panjang, Tyo wajib dengerin."],
["🌻 One Surprise Date","Tyo wajib nyiapin satu kejutan kecil untuk Magda."],
["👑 Princess Treatment","Satu hari Magda jadi Princess. Tyo ngikut aja."],
["🫂 One Free Hug","Voucher rahasia. Masa berlaku: selamanya."]
];
window.addEventListener("load",()=>{
  let steps=["Mengumpulkan foto...","Membuka surat...","Menyiapkan kejutan...","Menghitung hari menuju peluk...","Selesai ❤️"];
  let i=0; let int=setInterval(()=>{loaderText.textContent=steps[i++]||steps.at(-1);},560);
  setTimeout(()=>{clearInterval(int);loader.style.opacity=0;setTimeout(()=>loader.style.display="none",700)},3300);
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
});
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")})},{threshold:.12});
for(let i=1;i<=25;i++){
  let el=document.createElement("div"); el.className="polaroid reveal"; el.style.setProperty("--r",[-2,1,-1,2,-3,3][i%6]+"deg");
  el.innerHTML=`<div class="photo"><img src="assets/photos/photo${String(i).padStart(2,"0")}.jpg" alt="Kenangan ${i}"></div><div class="cap">${captions[i-1]}</div>`;
  el.onclick=()=>showPhoto("Kenangan #"+i,`<img src="assets/photos/photo${String(i).padStart(2,"0")}.jpg"><p>${captions[i-1]}</p>`);
  gallery.appendChild(el); observer.observe(el);
}
reasons.forEach((r,i)=>{
  let el=document.createElement("div"); el.className="reason reveal"; el.onclick=()=>{el.classList.toggle("open"); if(i===24) confetti();}
  el.innerHTML=`<div class="inner"><div class="front">❤️ Alasan #${i+1}</div><div class="back">${r}</div></div>`;
  document.getElementById("reasons").appendChild(el); observer.observe(el);
});
letters.forEach(l=>{
  let el=document.createElement("div"); el.className="letter reveal"; el.innerHTML=`<div>${l[0]}</div>`;
  el.onclick=()=>show(l[0],`<p style="font-size:18px;line-height:1.8">${l[1]}</p>`);
  openWhen.appendChild(el); observer.observe(el);
});
vouchers.forEach((v,i)=>{
  let el=document.createElement("div"); el.className="voucher reveal"; el.innerHTML=`🎁<span>Kejutan ${i+1}</span>`;
  el.onclick=()=>{show(v[0],`<p style="font-size:18px;line-height:1.8">${v[1]}</p>`); confetti();}
  document.getElementById("vouchers").appendChild(el); observer.observe(el);
});
function show(t,b){modalBox.className="modal-box";modalTitle.textContent=t;modalBody.innerHTML=b;modal.style.display="flex";document.body.classList.add("lock")}
function showPhoto(t,b){modalBox.className="modal-box photo-box";modalTitle.textContent=t;modalBody.innerHTML=b;modal.style.display="flex";document.body.classList.add("lock")}
function hide(){modal.style.display="none";document.body.classList.remove("lock")}
closeModal.onclick=hide; modal.onclick=e=>{if(e.target===modal)hide()}
missBtn.onclick=()=>show("💌 Buka Saat Kangen Tyo","<p style='font-size:18px;line-height:1.8'>Kalau suatu hari kamu capek, sedih, merasa sendirian, atau cuma lagi kangen, buka lagi halaman ini ya. Jarak boleh jauh, tapi rasa sayangku nggak kemana-mana.</p>");
musicBtn.onclick=()=>{ if(bgm.paused){bgm.play().catch(()=>show("🎵 Musik belum tersedia","<p>Masukkan file musik bernama <b>music.mp3</b> ke folder <b>assets/music</b>. Setelah itu tombol musik akan jalan.</p>")); musicBtn.textContent="🔇 Pause Music"} else {bgm.pause(); musicBtn.textContent="🎵 Play Music"} };
const target=new Date("2027-01-15T00:00:00");
function tick(){let d=target-new Date(); if(d<0)d=0; days.textContent=Math.floor(d/86400000); hours.textContent=Math.floor((d%86400000)/3600000); minutes.textContent=Math.floor((d%3600000)/60000); seconds.textContent=Math.floor((d%60000)/1000)}
setInterval(tick,1000); tick();
function confetti(){for(let i=0;i<65;i++){let e=document.createElement("div");e.textContent=["🌻","💛","✨","🎉","❤️"][Math.floor(Math.random()*5)];e.style.position="fixed";e.style.left=Math.random()*100+"vw";e.style.top="-40px";e.style.zIndex=999;e.style.fontSize=(18+Math.random()*22)+"px";e.style.transition="transform 3s linear, opacity 3s";document.body.appendChild(e);setTimeout(()=>{e.style.transform=`translateY(110vh) rotate(${360+Math.random()*360}deg)`;e.style.opacity=0},10);setTimeout(()=>e.remove(),3100)}}
loveBtn.onclick=()=>{confetti(); setTimeout(()=>show("I Love You, Magda ❤️","<p style='font-size:20px;line-height:1.8'>Terima kasih sudah memilih bertahan, bahkan saat jarak menguji kita. Semoga suatu hari nanti, kita tidak lagi menghitung hari untuk bertemu, tapi menghitung tahun kita bersama.</p>"),500)}

function openMainLetter(){
  modalBox.className="modal-box letter-modal";
  modalTitle.textContent="💌 Surat Untuk Magda";
  modalBody.innerHTML=`
    <p>Halo Magda, selamat ulang tahun yang ke-25 ya sayang.</p>
    <p>Aku masih ingat banget tanggal <b>23 Agustus</b>. Kita lagi riding bareng, dan di jalan itu kamu bilang iya ke cintaku. Sampai sekarang, momen itu masih jadi salah satu hal yang paling nggak akan pernah aku lupa.</p>
    <p>Aku masih sering merasa nggak nyangka perempuan sebaik kamu mau menerima aku. Bukan cuma menerima perasaanku, tapi juga mau berjalan bareng aku, bahkan ketika aku belum punya pekerjaan yang stabil dan belum punya banyak hal untuk dibanggakan.</p>
    <p>Yang paling aku suka dari kamu adalah perhatianmu. Kamu perhatian ke siapa pun. Kasih sayangmu juga terasa di hati, bukan cuma diomongin. Dan saat kamu memperhatikan aku, aku merasa benar-benar didengarkan, dipahami, dan dihargai.</p>
    <p>Meskipun sekarang kita terpisah jarak, aku ingin kamu tahu: hati aku selalu punya tempat untuk kamu. ❤️</p>`;
  modal.style.display="flex";
  document.body.classList.add("lock");
}


/* FINAL extra features */
const jarMessages = [
  "Minum air ya, cantik.",
  "Jangan lupa makan.",
  "Aku bangga sama kamu.",
  "Peluk virtual dari Tyo 🤍",
  "Kamu hebat, jangan lupa itu.",
  "Kalau capek, istirahat dulu ya.",
  "Aku kangen kamu.",
  "Senyum dulu, biar hariku ikut cerah.",
  "Terima kasih sudah bertahan sejauh ini.",
  "Aku masih memilih kamu hari ini.",
  "Kamu lebih berharga dari yang kamu kira.",
  "Jangan lupa sayang sama diri sendiri juga.",
  "Aku suka cara kamu peduli.",
  "Aku suka caramu mendengarkan.",
  "Aku suka kamu, titik.",
  "Pelan-pelan aja, kamu nggak harus kuat terus.",
  "Semoga harimu lebih ringan setelah baca ini.",
  "Aku percaya sama kamu.",
  "Kamu rumah yang selalu ingin aku pulang.",
  "Sampai ketemu di Januari ya."
];

function randomJar(){
  const msg = jarMessages[Math.floor(Math.random()*jarMessages.length)];
  show("🫙 Pesan Kecil Dari Tyo", `<p style="font-size:20px;line-height:1.8">${msg}</p>`);
  confetti();
}

function openLastGift(){
  show("🎁 Last Gift", `<div style="text-align:center">
    <img src="assets/photos/photo01.jpg" style="max-width:100%;border-radius:18px;margin-bottom:16px">
    <p style="font-size:20px;line-height:1.8">
      Terima kasih sudah menjadi rumah yang selalu ingin aku pulang.<br><br>
      Selamat ulang tahun, sayang.<br><br>
      <b>See you in January. This time... not through a screen, but in my arms.</b> ❤️
    </p>
  </div>`);
  confetti();
}

document.addEventListener("DOMContentLoaded",()=>{
  const last = document.createElement("section");
  last.className = "section final-extra";
  last.innerHTML = `
    <div class="container">
      <div class="wish-card reveal show">
        <h2>🫙 Jar of Messages</h2>
        <p>Klik tombol ini kapan pun kamu butuh pesan kecil dari Tyo.</p>
        <button class="btn" onclick="randomJar()">Ambil 1 Pesan</button>
      </div>
      <div class="wish-card reveal show" style="margin-top:22px">
        <h2>🎁 One Last Surprise</h2>
        <p>Satu hadiah terakhir sebelum halaman ini selesai.</p>
        <button class="btn big" onclick="openLastGift()">Open the Last Gift</button>
      </div>
    </div>`;
  const finalSection = document.querySelector(".final");
  if(finalSection && finalSection.parentNode) finalSection.parentNode.insertBefore(last, finalSection);
});

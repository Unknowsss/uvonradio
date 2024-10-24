const scrollContainer = document.querySelector('.scroll-images');
const cards = document.querySelectorAll('.child'); // Ambil semua card
const cardWidth = cards[0].offsetWidth + 16; // Lebar card + margin (300px + 16px)
const totalCards = cards.length;
const containerVisibleWidth = scrollContainer.clientWidth; // Lebar container yang terlihat (untuk 3 card)

// Hitung berapa banyak card yang terlihat dalam satu tampilan penuh
const visibleCards = Math.floor(containerVisibleWidth / cardWidth);
let currentIndex = 0; // Untuk melacak card yang saat ini terlihat

// Fungsi untuk menggulir satu card dalam satu waktu
function autoScroll() {
  // Gulir sesuai dengan lebar satu card
  currentIndex++;

  // Jika sudah melewati card terakhir, reset ke awal
  if (currentIndex >= totalCards - visibleCards) {
    // Tunda reset untuk efek transisi yang halus
    setTimeout(() => {
      scrollContainer.style.scrollBehavior = 'auto'; // Nonaktifkan scroll halus untuk reset instan
      scrollContainer.scrollLeft = 0; // Reset posisi gulir
      scrollContainer.style.scrollBehavior = 'smooth'; // Aktifkan kembali scroll halus
      currentIndex = 0; // Reset index
    }, 500); // Sesuaikan penundaan ini untuk transisi reset yang lebih halus
  } else {
    // Gulir dengan lebar satu card
    scrollContainer.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
  }
}

// Mulai auto-scroll setiap 3 detik (sesuaikan jika perlu)
let scrollInterval = setInterval(autoScroll, 3000);

// Hentikan scrolling saat mouse hover
scrollContainer.addEventListener('mouseover', () => {
  clearInterval(scrollInterval);
});

// Lanjutkan scrolling saat mouse keluar
scrollContainer.addEventListener('mouseout', () => {
  scrollInterval = setInterval(autoScroll, 3000);
});

// uchart
// window.onload = function() {
//     // Pertanyaan dan jawaban ke 1
//     document.getElementById('questionOne').textContent = "Bagaimana cara berlangganan di SmartBeez?";
//     document.getElementById('answerOne').textContent = "Untuk berlangganan, Parents cukup klik tombol Subscribe di halaman utama, pilih paket yang Parents inginkan, dan ikuti langkah-langkah pembayaran.";
    
//     // Pertanyaan dan jawaban ke 2
//     document.getElementById('questionTwo').textContent = "Apakah ada periode percobaan gratis untuk berlangganan?";
//     document.getElementById('answerTwo').textContent = "Ya, SmartBeez menawarkan percobaan gratis selama 7 hari untuk pengguna baru, dengan syarat mendaftarkan akun pada SmartBeez.";
    
//     // Pertanyaan dan jawaban ke 3
//     document.getElementById('questionThree').textContent = "Apa yang terjadi jika saya melewatkan pembayaran bulanan?";
//     document.getElementById('answerThree').textContent = "Jika pembayaran terlewat, akun Parents akan dibekukan sampai pembayaran dilakukan. Parents akan menerima email pengingat sebelum penangguhan.";

//     // Pertanyaan dan jawaban ke 4
//     document.getElementById('questionFour').textContent = "Apakah saya akan mendapatkan pengembalian dana jika saya membatalkan langganan?";
//     document.getElementById('answerFour').textContent = "Pengembalian dana tidak tersedia setelah langganan dibayarkan, tetapi Parents masih dapat menggunakan layanan hingga akhir periode.";

//     // Pertanyaan dan jawaban ke 5
//     document.getElementById('questionFive').textContent = "Apa yang terjadi setelah paket langganan berakhir?";
//     document.getElementById('answerFive').textContent = "Setelah masa paket langganan berakhir, Parents dapat memperpanjang paket langganan. Bila perpanjangan tidak dilakukan, maka akses premium berakhir.";
// };
// Toggle FAQ display
    // Dapatkan semua item FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        // Tutup semua FAQ yang lain
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active'); // Tutup yang lain
          }
        });

        // Toggle FAQ yang diklik
        item.classList.toggle('active');
      });
    });

// akhir uchart

// const API_KEY = 'YOUR_API_KEY';
// const VIDEO_ID = 'VIDEO_ID';  // Ganti dengan ID video yang ingin Anda tampilkan
// const videoContainer = document.getElementById('video-container');

// // Mendapatkan detail video dari API YouTube
// fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${VIDEO_ID}&key=${API_KEY}`)
// .then(response => response.json())
// .then(data => {
//     const video = data.items[0];
//     const videoTitle = video.snippet.title;
//     const videoId = video.id;

//     // Menampilkan video menggunakan iframe
//     videoContainer.innerHTML = `
//         <h2>${videoTitle}</h2>
//         <iframe width="560" height="315" 
//             src="https://www.youtube.com/embed/${videoId}" 
//             title="YouTube video player" 
//             frameborder="0" 
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//             allowfullscreen>
//         </iframe>
//     `;
// })
// .catch(error => console.error('Error fetching video data:', error));

// menyambungkan ke caster
// 

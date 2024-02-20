onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    var isUserInteracted = false;

    // Daftar lagu
    var songs = ['tws.mp3', 'svt.mp3',  /* ... */];

    // Fungsi untuk memainkan lagu secara acak
    function playRandomSong() {
        var randomIndex = Math.floor(Math.random() * songs.length);
        audio.src = songs[randomIndex];
        if (isUserInteracted) {
            audio.play();
        }
    }

    // Panggil playRandomSong() saat halaman dimuat
    playRandomSong();

    // Saat lagu selesai, panggil playRandomSong() lagi
    audio.addEventListener('ended', playRandomSong);

    // Tambahkan event listener untuk mendeteksi interaksi pengguna
    document.addEventListener('click', function() {
        if (!isUserInteracted) {
            isUserInteracted = true;
            playRandomSong();
        }
    });
});

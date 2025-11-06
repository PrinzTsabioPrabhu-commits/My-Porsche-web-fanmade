window.addEventListener('load', function() {
    // 1. Dapatkan elemen loader dan konten
    const loaderWrapper = document.getElementById('loader-wrapper');
    const mainContent = document.getElementById('main-content');

    // 2. Tunda penghilangan selama 2 detik (misalnya)
    setTimeout(function() {
        // Sembunyikan loader
        loaderWrapper.style.display = 'none';
        
        // Tampilkan konten utama
        mainContent.style.display = 'block'; 
        
    }, 2000); // Durasi tunda dalam milidetik (2000ms = 2 detik)
});
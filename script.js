// Navigasi menu utama
// Menangani klik pada menu navigasi dan mengarahkan ke halaman yang sesuai
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const text = this.textContent.trim().toLowerCase();
    if (text === 'home') window.location.href = 'index.html';
    else if (text === 'profile') window.location.href = 'profile.html';
    else if (text === 'peta') window.location.href = 'peta.html';
  });
});

// Inisialisasi peta Leaflet di footer
document.addEventListener('DOMContentLoaded', function() {
  // Koordinat: 6°28'04.4"S 107°03'24.2"E => -6.467889, 107.056722
  var map = L.map('map').setView([-6.467889, 107.056722], 17);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);
  L.marker([-6.467889, 107.056722]).addTo(map)
    .bindPopup(
      `<div style="text-align:center;">
        <b>Kantor Desa Singajaya</b><br>
        6°28'04.4"S 107°03'24.2"E
      </div>`
    )
    .openPopup();
});
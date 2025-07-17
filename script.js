// Toggle sidebar menu
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn?.addEventListener('click', (e) => {
  e.stopPropagation(); // Biar gak langsung ketutup karena event document
  sidebar.style.display = (sidebar.style.display === 'none' || sidebar.style.display === '') ? 'block' : 'none';
});

// Toggle dropdown profil
const profileBtn = document.querySelector('.icon-btn');
const dropdown = document.getElementById('profile-dropdown');

profileBtn?.addEventListener('click', (e) => {
  e.stopPropagation(); // Sama, cegah auto-close
  dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
});

// Tutup sidebar / dropdown kalau klik di luar
document.addEventListener('click', (e) => {
  // Cek sidebar
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.style.display = 'none';
  }

  // Cek dropdown
  if (!dropdown.contains(e.target) && !profileBtn.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});

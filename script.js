const app = document.getElementById('app');

const boxData = [
    "Data Ministry",
    "Crowd",
    "Usher",
    "First Aid",
    "Traffic",
    "Security"
];

// FUNGSI 1: Merender Halaman Utama (Beranda)
function renderHomePage() {
    // Bersihkan layar sebelumnya
    app.innerHTML = '';

    // Buat Toolbar
    const toolbar = document.createElement('div');
    toolbar.className = 'toolbar';
    toolbar.textContent = 'SOP Crowd Management';
    app.appendChild(toolbar);

    // Buat Welcome Text Container
    const welcomeContainer = document.createElement('div');
    welcomeContainer.className = 'welcome-container';

    const welcomeText = document.createElement('h2');
    welcomeText.className = 'welcome-text';
    welcomeText.textContent = 'Welcome Home!';

    welcomeContainer.appendChild(welcomeText);
    app.appendChild(welcomeContainer);

    // Buat Area Konten Utama
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';

    // Buat Pembungkus Grid untuk Kotak-kotak (menggunakan id 'grid-container' alih-alih 'app')
    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid-container'; // Menggantikan id 'app' lama untuk CSS

    boxData.forEach((text) => {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = text;

        box.addEventListener('click', () => {
            if (text === "Data Ministry") {
                renderDataMinistryPage();
            } else {
                alert(`Halaman SOP untuk ${text} belum tersedia!`);
            }
        });

        gridContainer.appendChild(box);
    });

    mainContent.appendChild(gridContainer);
    app.appendChild(mainContent);
}

// FUNGSI 2: Merender Halaman Data Ministry
function renderDataMinistryPage() {
    app.innerHTML = '';

    // Buat Toolbar Data Ministry dengan Tombol "Back"
    const toolbar = document.createElement('div');
    toolbar.className = 'toolbar';
    toolbar.style.display = 'flex';
    toolbar.style.alignItems = 'center';

    // Tombol Back di Toolbar
    const backBtn = document.createElement('span');
    backBtn.textContent = '<'; // Ikon Panah Kiri
    backBtn.style.cursor = 'pointer';
    backBtn.style.marginRight = '15px';
    backBtn.style.fontSize = '1.8rem';
    backBtn.title = 'Kembali ke Beranda';

    backBtn.addEventListener('click', () => {
        renderHomePage();
    });

    const titleText = document.createElement('span');
    titleText.textContent = 'Data Ministry';

    toolbar.appendChild(backBtn);
    toolbar.appendChild(titleText);
    app.appendChild(toolbar);

    // Buat Area Konten Utama Data Ministry
    const mainContent = document.createElement('div');
    mainContent.className = 'main-content';

    // Buat Konten Spesifik Halaman
    const contentBox = document.createElement('div');
    contentBox.style.textAlign = 'center';
    contentBox.style.width = '100%';

    // --- MENAMBAHKAN KOTAK-KOTAK MENU KHUSUS DATA MINISTRY ---
    const subMenus = [
        {
            title: "Sistem Absensi",
            desc: "Panduan lengkap mengenai tata cara memasukkan data absensi jemaat harian, serta proses pengecekan ulang data digital."
        },
        {
            title: "Pusat Laporan",
            desc: "Instruksi cara mengakses dasbor laporan bulanan dan mingguan untuk keperluan evaluasi internal dan presentasi kepemimpinan."
        },
        {
            title: "Arsip Jemaat",
            desc: "Kebijakan keamanan tingkat tinggi untuk mengakses, merubah, dan menangani arsip data personal anggota secara sensitif."
        },
        {
            title: "Jadwal Shift",
            desc: "Pembagian tugas dan rotasi pelayanan staf Data Ministry untuk setiap kebaktian."
        }
    ];

    const gridContainer = document.createElement('div');
    gridContainer.id = 'grid-containerInner';
    gridContainer.style.gridTemplateColumns = 'repeat(4, 1fr)'; // Memaksa grid menjadi 4 kolom khusus di sini
    gridContainer.style.marginBottom = '20px'; // Jarak ke kotak detail diperkecil

    // Tempat untuk memuat teks spesifik ketika kotak menu dipilih
    const detailBox = document.createElement('div');
    detailBox.className = 'menu-detail-box';
    detailBox.style.display = 'none'; // Sembunyikan di awal

    subMenus.forEach((item) => {
        const box = document.createElement('div');
        box.className = 'box';
        box.textContent = item.title;

        box.addEventListener('click', () => {
            // Tampilkan kotak detail
            detailBox.style.display = 'block';

            // Isi/Ubah teks di dalam kotak detail
            detailBox.innerHTML = `
                <h3 style="margin-top: 0; color: #1a1a1a;">${item.title}</h3>
                <p style="margin: 0; line-height: 1.6;">${item.desc}</p>
            `;
        });

        gridContainer.appendChild(box);
    });

    contentBox.appendChild(gridContainer);
    contentBox.appendChild(detailBox); // Masukkan tempat teks detail di bawah grid kotak
    // ------------------------------------------------------------

    mainContent.appendChild(contentBox);
    app.appendChild(mainContent);
}

// Menjalankan render halaman utama untuk pertama kalinya
renderHomePage();

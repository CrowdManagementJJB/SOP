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

    // --- PENJELASAN PELAYANAN DATA MINISTRY ---
    const explanationBox = document.createElement('div');
    explanationBox.className = 'data-ministry-explanation';
    explanationBox.innerHTML = `
        <h3>APA ITU DATA MINISTRY?</h3>
        <p>Data Ministry adalah pelayanan yang berfokus pada pendataan dan melayani kebutuhan jemaat seperti registrasi dan informasi seputar GMS.</p>
    `;
    contentBox.appendChild(explanationBox);

    // --- VISI & MISI DENGAN DROPDOWN ---
    const visionMissionContainer = document.createElement('div');
    visionMissionContainer.className = 'vision-mission-container';

    const vmData = [
        {
            title: "Visi",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
            content: "Menyambut dan mengasihi umat Tuhan untuk terhubung dengan gereja dan mengalami kehadiran-Nya."
        },
        {
            title: "Misi",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
            content: "<ul style='margin:0; padding-left: 5px; list-style-type: none;'><li style='margin-bottom: 8px;'><span style='font-size: 1.2rem; font-weight: 800; color: #1a1a1a;'>H</span> - <strong>Hospitality</strong>: Menjawab kebutuhan data jemaat dengan kasih dan sesuai dengan value data ministry.</li><li style='margin-bottom: 8px;'><span style='font-size: 1.2rem; font-weight: 800; color: #1a1a1a;'>E</span> - <strong>Engagement</strong>: Menghubungkan setiap jemaat kepada Tuhan dan sesama sesuai dengan kebutuhan setiap jemaat.</li><li style='margin-bottom: 8px;'><span style='font-size: 1.2rem; font-weight: 800; color: #1a1a1a;'>L</span> - <strong>Love</strong>: Melayani dengan penuh kasih dan sukacita terhadap jemaat dan sesama.</li><li style='margin-bottom: 0;'><span style='font-size: 1.2rem; font-weight: 800; color: #1a1a1a;'>P</span> - <strong>Pray</strong>: Membawa hadirat Allah dalam setiap pelayanan kita dan melibatkan Tuhan dalam kehidupan kita.</li></ul>"
        }
    ];

    vmData.forEach(item => {
        const vmCol = document.createElement('div');
        vmCol.className = 'vm-column';

        const vmHeader = document.createElement('div');
        vmHeader.className = 'vm-header';
        vmHeader.innerHTML = `<div class="vm-title"><span class="vm-icon">${item.icon}</span> ${item.title}</div><span class="vm-toggle">▼</span>`;

        const vmContent = document.createElement('div');
        vmContent.className = 'vm-content';
        vmContent.innerHTML = item.content;

        vmHeader.addEventListener('click', () => {
            const isVisible = vmContent.classList.contains('show');
            if (!isVisible) {
                vmContent.classList.add('show');
                vmHeader.querySelector('.vm-toggle').style.transform = 'rotate(180deg)';
                vmHeader.classList.add('active');
            } else {
                vmContent.classList.remove('show');
                vmHeader.querySelector('.vm-toggle').style.transform = 'rotate(0deg)';
                vmHeader.classList.remove('active');
            }
        });

        vmCol.appendChild(vmHeader);
        vmCol.appendChild(vmContent);
        visionMissionContainer.appendChild(vmCol);
    });

    contentBox.appendChild(visionMissionContainer);

    // --- TAMBAHAN NILAI / VALUES (T-R-U-S-T) ---
    const valuesTitle = document.createElement('h3');
    valuesTitle.textContent = 'OUR CORE VALUES';
    valuesTitle.style.marginTop = '40px';
    valuesTitle.style.marginBottom = '25px';
    valuesTitle.style.fontSize = '2rem';
    valuesTitle.style.fontWeight = '800';
    valuesTitle.style.color = '#1a1a1a';
    valuesTitle.style.letterSpacing = '1px';
    valuesTitle.style.textTransform = 'uppercase';
    contentBox.appendChild(valuesTitle);

    const valuesGrid = document.createElement('div');
    valuesGrid.className = 'values-grid';

    const trustValues = [
        { letter: "T", title: "TRUTH", desc: "Kita harus menjadikan kebenaran sebagai dasar dalam pikiran, perkataan, dan perbuatan.<br><br><span style='font-style:italic; color:#444; font-size:0.85rem;'>\"Haruslah engkau melakukan apa yang benar dan baik di mata Tuhan, supaya baik keadaanmu dan engkau memasuki dan menduduki negeri yang baik.\"</span><br><strong>(Ulangan 6:18)</strong>" },
        { letter: "R", title: "RESPONSIBLE AND RELIABLE", desc: "Kita harus menjadi pribadi yang BERTANGGUNG JAWAB dan DAPAT DIANDALKAN dalam segala perkara.<br><br><span style='font-style:italic; color:#444; font-size:0.85rem;'>\"Apa pun juga yang kamu perbuat, perbuatlah dengan segenap hatimu seperti untuk Tuhan dan bukan untuk manusia.\"</span><br><strong>(Kolose 3:23)</strong> " },
        { letter: "U", title: "UNITY", desc: "Kita harus menjadi sebuah KESATUAN sehingga kita dapat saling bekerja sama dalam menyelesaikan berbagai persoalan.<br><br><span style='font-style:italic; color:#444; font-size:0.85rem;'>\"Apa pun juga yang kamu perbuat, perbuatlah dengan segenap hatimu seperti untuk Tuhan dan bukan untuk manusia.\"</span><br><strong>(Kolose 3:23)</strong> " },
        { letter: "S", title: "SECURE", desc: "Kita harus menjadi orang yang dapat memberi rasa AMAN bagi sesama, sehingga dapat dipercaya dalam berbagai hal..<br><br><span style='font-style:italic; color:#444; font-size:0.85rem;'>\"Hendaklah kata-katamu senantiasa penuh kasih, jangan hambar, sehingga kamu tahu, bagaimana kamu harus memberi jawab kepada setiap orang.\"</span><br><strong>(Kolose 4:6)</strong> " },
        { letter: "T", title: "TRANSFORMING LIFE", desc: "Kita harus MERUBAH HIDUP kita ke arah yang lebih baik..<br><br><span style='font-style:italic; color:#444; font-size:0.85rem;'>\"Janganlah kamu menjadi serupa dengan dunia ini, tetapi berubahlah oleh pembaharuan budimu, sehingga kamu dapat membedakan manakah kehendak Allah: apa yang baik, yang berkenan kepada Allah dan yang sempurna.\"</span><br><strong>(Roma 12:2)</strong>" }
    ];

    trustValues.forEach(val => {
        const vBox = document.createElement('div');
        vBox.className = 'value-box';

        const vFront = document.createElement('div');
        vFront.className = 'value-front';
        vFront.innerHTML = `<div class="value-letter">${val.letter}</div><div class="value-title">${val.title}</div>`;

        const vBack = document.createElement('div');
        vBack.className = 'value-back';
        vBack.innerHTML = `<h4>${val.title}</h4><p>${val.desc}</p>`;

        vBox.appendChild(vFront);
        vBox.appendChild(vBack);
        valuesGrid.appendChild(vBox);
    });

    contentBox.appendChild(valuesGrid);

    // --- TAMBAHAN HEADER "DATA MINISTRY OUR SERVICE" ---
    const serviceTitle = document.createElement('h3');
    serviceTitle.textContent = 'DATA MINISTRY OUR SERVICE';
    serviceTitle.style.marginTop = '40px';
    serviceTitle.style.marginBottom = '25px';
    serviceTitle.style.fontSize = '2rem';
    serviceTitle.style.fontWeight = '800';
    serviceTitle.style.color = '#1a1a1a';
    serviceTitle.style.letterSpacing = '1px';
    serviceTitle.style.textTransform = 'uppercase';
    contentBox.appendChild(serviceTitle);

    // --- MENAMBAHKAN KOTAK-KOTAK MENU KHUSUS DATA MINISTRY ---
    const subMenus = [
        {
            title: "DATA ENTRY",
            desc: "Panduan lengkap mengenai tata cara memasukkan data absensi jemaat harian, serta proses pengecekan ulang data digital."
        },
        {
            title: "VERIFICATION OR TICKETING",
            desc: "Instruksi cara mengakses dasbor laporan bulanan dan mingguan untuk keperluan evaluasi internal dan presentasi kepemimpinan."
        },
        {
            title: "INFORMATION",
            desc: "Kebijakan keamanan tingkat tinggi untuk mengakses, merubah, dan menangani arsip data personal anggota secara sensitif."
        }
    ];

    const gridContainer = document.createElement('div');
    gridContainer.className = 'service-grid';

    subMenus.forEach((item) => {
        const box = document.createElement('div');
        box.className = 'service-box';

        const front = document.createElement('div');
        front.className = 'service-front';
        front.textContent = item.title;

        const back = document.createElement('div');
        back.className = 'service-back';

        let backHTML = `
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
        `;



        back.innerHTML = backHTML;

        box.appendChild(front);
        box.appendChild(back);
        gridContainer.appendChild(box);
    });

    contentBox.appendChild(gridContainer);
    // ------------------------------------------------------------

    mainContent.appendChild(contentBox);
    app.appendChild(mainContent);
}

// Menjalankan render halaman utama untuk pertama kalinya
renderHomePage();

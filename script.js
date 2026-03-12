const app = document.getElementById('app');

const boxData = [
    "Data Ministry",
    "Crowd",
    "Usher",
    "First Aid",
    "Traffic",
    "Security"
];

// Mengulang data untuk membuat elemen HTML secara otomatis
boxData.forEach((text, index) => {
    // Membuat elemen div
    const box = document.createElement('div');

    // Memberikan class CSS 'box' untuk gaya (styling)
    box.className = 'box';

    // Memasukkan teks ke dalam kotak
    box.textContent = text;

    // Menambahkan interaksi saat kotak di klik
    box.addEventListener('click', () => {
        alert(`Anda baru saja menekan ${text}!`);
    });

    // Memasukkan kotak ke dalam wadah utama
    app.appendChild(box);
});

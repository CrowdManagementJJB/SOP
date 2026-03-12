const app = document.getElementById('app');

// Membuat elemen h1
const heading = document.createElement('h1');
heading.textContent = 'Welcome Home!';

// Membuat elemen p
const paragraph = document.createElement('p');
paragraph.textContent = 'Website saya sudah online! (Dirender menggunakan JavaScript)';

// Memasukkan elemen ke dalam div dengan id "app"
app.appendChild(heading);
app.appendChild(paragraph);

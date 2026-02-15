const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const gallery = document.getElementById("gallery");
const closeBtn = document.querySelector(".close-btn");
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('thumb')) {
        openModal(e.target);
    }
});

function openModal(img) {
    modal.style.display = "flex";
    modalImg.src = img.src; 
    captionText.innerHTML = img.alt;
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

closeBtn.onclick = closeModal;

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModal();
});

modal.onclick = (e) => {
    if (e.target === modal) closeModal();
};

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    if(themeToggle) themeToggle.textContent = '☀️ Light Mode';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    let theme = 'light';
    if (body.classList.contains('dark-theme')) {
        theme = 'dark';
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }

    localStorage.setItem('theme', theme);
});
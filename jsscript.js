/* ==========================================
   NAVBAR MOBILE - MENU HAMBURGER
   ========================================== */
const menuicon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuicon && navbar) {
    menuicon.addEventListener('click', () => {
        navbar.classList.toggle('active');

        // Troca o ícone entre hamburger e fechar
        if (navbar.classList.contains('active')) {
            menuicon.classList.remove('bx-menu');
            menuicon.classList.add('bx-x');
        } else {
            menuicon.classList.remove('bx-x');
            menuicon.classList.add('bx-menu');
        }
    });

    // Fecha o menu ao clicar em um link (navegação)
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuicon.classList.remove('bx-x');
            menuicon.classList.add('bx-menu');
        });
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !menuicon.contains(e.target)) {
            navbar.classList.remove('active');
            menuicon.classList.remove('bx-x');
            menuicon.classList.add('bx-menu');
        }
    });
}
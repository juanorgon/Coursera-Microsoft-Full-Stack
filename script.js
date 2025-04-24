const hamburgerButton = document.querySelector('.hamburger-button');
const navMenu = document.querySelector('#nav-menu');

hamburgerButton.addEventListener('click', () => {
    const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
    hamburgerButton.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('visible');
});

const projectImages = document.querySelectorAll('.project-image');

projectImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        console.log('Mouse over image:', image.src);
        const modal = document.createElement('div');
        modal.classList.add('lightbox-modal');
        modal.innerHTML = `
            <div class="lightbox-content">
                <img src="${image.src}" alt="${image.alt}" class="lightbox-image">
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            modal.remove();
        });
    });
});
// This file contains JavaScript code for interactive features of the personal website.

document.addEventListener('DOMContentLoaded', function() {
    // Example of a simple interaction: alert on button click
    const button = document.getElementById('contact-button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Thank you for reaching out!');
        });
    }

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 项目实物图切换
    document.querySelectorAll('[data-project-gallery]').forEach(gallery => {
        const images = gallery.querySelectorAll('[data-gallery-image]');
        const controls = gallery.querySelectorAll('[data-gallery-control]');

        controls.forEach((control, activeIndex) => {
            control.addEventListener('click', function() {
                images.forEach((image, imageIndex) => {
                    image.hidden = imageIndex !== activeIndex;
                });

                controls.forEach((item, itemIndex) => {
                    const isActive = itemIndex === activeIndex;
                    item.classList.toggle('is-active', isActive);
                    item.setAttribute('aria-pressed', String(isActive));
                });
            });
        });
    });

    // 图片放大功能
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.querySelector('.modal .close');

    if (modal && modalImage && closeModal) {
        document.querySelectorAll('img[data-enlargeable]').forEach(img => {
            img.addEventListener('click', function() {
                modal.classList.add('is-open');
                modalImage.src = this.src;
                modalImage.alt = this.alt;
            });
        });

        closeModal.addEventListener('click', function() {
            modal.classList.remove('is-open');
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('is-open');
            }
        });
    }
});

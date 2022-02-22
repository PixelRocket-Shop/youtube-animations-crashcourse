import 'bootstrap';


(function() {
    const offcanvasToggles = document.querySelectorAll('.btn-toggle-slideout');

    offcanvasToggles.forEach((toggle) => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            document.body.classList.toggle('slideout-active');
        });
    });
})();
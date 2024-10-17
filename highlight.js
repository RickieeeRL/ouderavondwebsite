<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Selecteer alle navigatie-links
        const navLinks = document.querySelectorAll('.nav-link');

        // Loop door elk navigatie-item
        navLinks.forEach(link => {
            // Voeg een click-event listener toe aan elk item
            link.addEventListener('click', function(event) {
                // Voorkom de standaard actie van de link (scrollen)
                event.preventDefault();

                // Verwijder de highlight van alle links
                navLinks.forEach(l => l.classList.remove('highlight'));

                // Voeg de highlight klasse toe aan het geklikte link
                this.classList.add('highlight');

                // Verwijder de highlight klasse na 1 seconde
                setTimeout(() => {
                    this.classList.remove('highlight');
                }, 1000); // 1000 milliseconden = 1 seconde

                // Scroll naar het doel, als je dat wilt
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });
</script>

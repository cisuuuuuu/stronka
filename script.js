function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const flowers = document.querySelectorAll('.flower');

    // Otwieranie koperty
    envelope.classList.toggle('open');

    // Pokazujemy kwiaty po otwarciu koperty
    if (envelope.classList.contains('open')) {
        flowers.forEach(flower => {
            flower.classList.add('show');
        });
    } else {
        // Chowanie kwiatów po zamknięciu koperty
        flowers.forEach(flower => {
            flower.classList.remove('show');
        });
    }
}
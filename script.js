function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const flowers = document.querySelectorAll('.flower');

    
    envelope.classList.toggle('open');

    
    if (envelope.classList.contains('open')) {
        flowers.forEach(flower => {
            flower.classList.add('show');
        });
    } else {
        
        flowers.forEach(flower => {
            flower.classList.remove('show');
        });
    }
}
document.querySelectorAll('.groups').forEach(function(group) {
    // İlk başta resimleri gizle
    const images = group.querySelectorAll('img');
    images.forEach(function(img) {
        img.style.visibility = 'hidden';
        img.style.opacity = '0';
    });
    group.style.height = '50px'; // Başlangıçta yüksekliği 50px yap (kapalı durum)

    // "merhaba" div'ine tıklama işlemi ekle
    const toggleButton = group.querySelector('div[style="background-color: red; cursor: pointer;"]');
    toggleButton.addEventListener('click', function() {
        let isHidden = Array.from(images).every(img => img.style.visibility === 'hidden');

        images.forEach(function(img) {
            if (isHidden) {
                img.style.visibility = 'visible';
                img.style.opacity = '1';
            } else {
                img.style.visibility = 'hidden';
                img.style.opacity = '0';
            }
        });

        // Eğer tüm resimler gizlendiyse, div'in yüksekliğini küçült
        group.style.height = isHidden ? 'auto' : '50px'; // Burada 50px, kapalıyken gösterilecek minimum yükseklik
    });
});

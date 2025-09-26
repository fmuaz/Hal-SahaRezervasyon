document.addEventListener('DOMContentLoaded', (event) => {
  // İlgili HTML elementlerini alıyoruz
  const fileInput = document.getElementById('file-upload');
  const fileNameDisplay = document.getElementById('file-name-display');

  // Dosya seçildiğinde tetiklenecek olay dinleyicisini ekliyoruz
  fileInput.addEventListener('change', (e) => {
    if (fileInput.files.length > 0) {
      // Bir dosya seçilmişse adını göster
      fileNameDisplay.textContent = 'Seçilen Dosya: ' + fileInput.files[0].name;
      // Başarılı bir seçimi belirtmek için metin rengini yeşile çevirelim (isteğe bağlı)
      fileNameDisplay.classList.remove('text-[#4c739a]');
      fileNameDisplay.classList.add('text-[#078838]');
    } else {
      // Dosya seçimi iptal edilirse metni sıfırla
      fileNameDisplay.textContent = 'Henüz dosya seçilmedi.';
      fileNameDisplay.classList.remove('text-[#078838]');
      fileNameDisplay.classList.add('text-[#4c739a]');
    }
  });
});
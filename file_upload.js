document.addEventListener('DOMContentLoaded', (event) => {
  // İlgili HTML elementlerini alıyoruz
  const fileInput = document.getElementById('file-upload');
  const fileNameDisplay = document.getElementById('file-name-display');
  
  // Maksimum dosya boyutu: 2 MB (2 * 1024 * 1024 = 2097152 bayt)
  const MAX_FILE_SIZE_BYTES = 2097152; 

  // Bayt cinsinden boyutu KB/MB formatına dönüştüren yardımcı fonksiyon
  function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Dosya seçildiğinde tetiklenecek olay dinleyicisini ekliyoruz
  fileInput.addEventListener('change', (e) => {
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const fileSize = file.size; // Dosya boyutu bayt cinsinden

      // 1. Boyut Kontrolü
      if (fileSize > MAX_FILE_SIZE_BYTES) {
        // Dosya 2 MB'tan büyükse
        fileNameDisplay.textContent = 'HATA: Seçilen dosya boyutu ' + formatFileSize(fileSize) + ' ile 2 MB limitini aşıyor!';
        fileNameDisplay.classList.remove('text-[#078838]');
        fileNameDisplay.classList.add('text-[#d41111]'); // Hata için kırmızı renk
        
        // Input alanını sıfırlayarak yüklemeyi engelliyoruz
        fileInput.value = ''; 
        
        alert('UYARI: Seçilen dosya 2 MB limitini aştığı için yüklenemez.');
        
      } else {
        // Dosya boyutu limit içindeyse
        fileNameDisplay.textContent = 'Seçilen Dosya: ' + file.name + ' (' + formatFileSize(fileSize) + ')';
        fileNameDisplay.classList.remove('text-[#4c739a]', 'text-[#d41111]');
        fileNameDisplay.classList.add('text-[#078838]'); // Başarılı seçim için yeşil renk
      }
      
    } else {
      // Dosya seçimi iptal edilirse metni sıfırla
      fileNameDisplay.textContent = 'Henüz dosya seçilmedi.';
      fileNameDisplay.classList.remove('text-[#078838]', 'text-[#d41111]');
      fileNameDisplay.classList.add('text-[#4c739a]');
    }
  });
});
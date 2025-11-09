// Registra o Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registrado:', reg))
      .catch(err => console.log('Registro do Service Worker falhou:', err));
  });
}

const urlInput = document.getElementById('url-input');
const parseButton = document.getElementById('parse-button');
const contentContainer = document.getElementById('zen-content-container');
const loadingSpinner = document.getElementById('loading-spinner');

parseButton.addEventListener('click', async () => {
  const url = urlInput.value;
  if (!url) return;

  contentContainer.innerHTML = '';
  loadingSpinner.classList.remove('hidden');

  try {
    // VITE_API_URL será injetada pelo Docker Compose
    const apiUrl = `${import.meta.env.VITE_API_URL || ''}/api/parse?url=${encodeURIComponent(url)}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Falha ao buscar conteúdo');
    }

    const data = await response.json();

    // Aplica o HTML limpo
    contentContainer.innerHTML = `<h1>${data.title}</h1>${data.content}`;

  } catch (error) {
    contentContainer.innerHTML = `<p>Erro: ${error.message}</p>`;
  } finally {
    loadingSpinner.classList.add('hidden');
  }
});
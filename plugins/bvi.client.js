// plugins/bvi.client.js
export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/css/bvi.min.css';
      document.head.appendChild(link);
  
      const script = document.createElement('script');
      script.src = '/js/bvi.min.js';
      script.async = true;
      script.onload = () => console.log('BVI загружен');
      document.body.appendChild(script);
    }
  });
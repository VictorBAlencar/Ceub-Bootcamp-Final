import express from 'express';
import { JSDOM } from 'jsdom';
import { Readability } from '@mozilla/readability';

const app = express();
const port = 3000;

app.get('/api/parse', async (req, res) => {
  const urlToParse = req.query.url;
  if (!urlToParse) {
    return res.status(400).json({ error: 'URL é obrigatória' });
  }

  try {
    // 1. Busca o HTML da URL
    const dom = await JSDOM.fromURL(urlToParse);

    // 2. Usa o Readability para extrair o artigo
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    // 3. Retorna o conteúdo limpo
    if (article) {
      res.json({ 
        title: article.title, 
        content: article.content 
      });
    } else {
      res.status(500).json({ error: 'Não foi possível extrair o conteúdo.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Falha ao processar a URL', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`API do Leitor Zen rodando em http://localhost:${port}`);
});
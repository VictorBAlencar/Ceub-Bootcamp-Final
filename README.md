# 🧘 Leitor Zen (Versão PWA)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Este projeto é um PWA (Progressive Web App) que transforma artigos de blog e notícias em uma versão limpa, focada e sem distrações.

Originalmente uma extensão para Google Chrome, este projeto foi migrado para uma arquitetura de PWA + API como parte do Bootcamp II, utilizando containers Docker e CI/CD com GitHub Actions.

## 🚀 PWA em Produção

> **[Acesse o Leitor Zen PWA aqui](https://SEU-USUARIO.github.io/SEU-REPO/)**

O PWA é "instalável" em desktops e dispositivos móveis para uma experiência de aplicativo nativo.

---

## 🏗️ Arquitetura

Este projeto utiliza uma arquitetura **monorepo** com dois serviços principais, orquestrados via `docker-compose.yml`:

* **`apps/web`**: O frontend PWA (Progressive Web App) construído com Vite e Vanilla JS. Esta é a interface que o usuário acessa, responsável por registrar o Service Worker (para cache offline) e exibir o conteúdo.
* **`apps/api`**: O backend (API) em Node.js/Express. Este serviço recebe a URL do frontend, usa `@mozilla/readability` e `jsdom` para buscar e limpar o conteúdo do artigo, e o devolve como um JSON limpo para o PWA.

---

## 🐳 Rodando Localmente com Docker

Para executar o projeto completo (PWA + API) em sua máquina local, você precisará ter o **Docker** e o **Docker Compose** instalados.

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/SEU-REPO.git](https://github.com/SEU-USUARIO/SEU-REPO.git)
    ```

2.  Entre na pasta do projeto:
    ```bash
    cd NOME-DO-REPO
    ```

3.  Suba os contêineres (isso irá construir as imagens e iniciar os serviços):
    ```bash
    docker-compose up --build
    ```

4.  Pronto!
    * Acesse o **PWA (web)** em: `http://localhost:8080`
    * A **API (api)** estará rodando em: `http://localhost:3000`

---

## 🛠️ Tecnologias Utilizadas

* **Frontend (PWA):** Vite, Vanilla JS, PWA (Manifest & Service Worker)
* **Backend (API):** Node.js, Express
* **Parsing de Conteúdo:** `@mozilla/readability`, `jsdom`
* **Containerização:** Docker, Docker Compose
* **CI/CD:** GitHub Actions
* **Testes E2E:** Playwright

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

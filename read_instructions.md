# Estrutura de aplicação com REACT

### 1 - Crie uma pasta com nome e em qualquer local de sua preferencia, após abra no VSCode.

### 2 - Abra terminal e execute o comando para criar a estrutura inicial com REACT. **No meu caso o nome da aplicação é "primeflix".**
```
npx create-react-app primeflix -t
```

### 3 - Após, click no nova pasta "primeflix" criada pelo comando citado anteriormente, *abra essa nova pasta no terminal* e execute o comando abaixo para visualizar sua aplicação incial rodando no navegador.
```
npm start
```
Retorno será semelhante ao abaixo para abrir localmente utilizando navegador (http://localhost:3000) .
```
PS C:\Users\Denilson Araújo\Desktop\prime-flix\primeflix> npm start                                                             
Compiled successfully!

You can now view primeflix in the browser.

Compiled successfully!

You can now view primeflix in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.72:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

### 4 - Realizar limpeza de arquivos padrões que vem instalados que não serão utilizados.</br>
**Dentro da pasta SRC deletar os seguintes arquivos:** </br>

> App.css <br>
> App.teste.js <br>
> Logo.svg <br>
> reportWevVitals.js <br>

### 5 - Padronizando arquivos iniciais <br>

&nbsp; &nbsp; &nbsp;> 5.1 Dentro da pasta **SRC** arquivo **App.js** adapte dessa forma:
```
function App() {
  return (
    <div className="App">
      <h1>Teste</h1>
    </div>
  );
}

export default App;

```
&nbsp; &nbsp; &nbsp;> 5.2 Dentro da pasta **SRC** arquivo **index.js** adapte dessa forma:
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

&nbsp; &nbsp; &nbsp;> 5.3 Dentro da pasta **SRC** arquivo **index.css** adapte dessa forma:

```
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

body {
  font-family: sans-serif;
}

.app {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
```

### 6 - Crie uma pasta dentro da pasta SRC com o nome de "pages", nesse local ficará estrutura de todas nossa páginas.

> Aqui nessa etapa iremos a principio inserir duas páginas dentro da "pages" que será, Home e Filme.

### 7 - Dentro da pasta *"pages"* crie uma nova pasta com nome de "Home", e dentro dessa pasta Home crie o arquivo "index.js" e insira a estrutura abaixo inicialmente:

```
function Home(){
    return(
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Home;
```

### 7 - Dentro da pasta *pages* crie uma nova pasta com nome de "Filme", e dentro dessa pasta Home crie o arquivo "index.js" e insira a estrutura abaixo inicialmente:

```
function Filme(){
    return(
        <div>
            <h1>Bem vindo a Home</h1>
        </div>
    )
}

export default Filme;
```
<br>

> Para parar de rodar a aplicação vá até o terminal de execute um "CRTL + c".

### 8 - Para confirgurar as rotas da nossa aplicação precisaremos instalar o react-router-dom, executando a instalação do mesmo no terminal.

```
npm istall react-router-dom
```

### 9 - Crie um arquivo dentro da pasta SRC com o nome de "routes.js", esse arquivos será responsável por gerenciar as rotas da nossa aplicação.

> OBS: Inicialmente criamos somente 2 arquivos/páginas (Home e Filmes), porem em uma aplicação pode utilizar mais paginações.

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/filme/:id" element={ <Filme/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;
```

### 10 - Após a criação do arquivo "routes.js", precisaremos realizar a conexão do mesmo com nosso arquivo "app.js" que é o responsével por rodar nossa aplicação, realizaremos o import do RoutesApp o componente dentro do return da function.

```
import RoutesApp from "./routes";

function App() {
  return (
    <div className="App">
      <RoutesApp />
    </div>
  );
}

export default App;
```

### 11 - Crie uma pasta dentro da pasta SRC com o nome de "components", nesse local ficará todos componentes que criarmos podendo utiliza-los em qualquer local/página quando necessário.
<br>

> Aqui nessa etapa iremos criar o "Header" que é nosso menu de navegação, onde via **componentização** iremos renderizar em todas nossas páginas otimizando codigo e performando nossa aplicação.

### 12 - Dentro da pasta "components" crie uma nova pasta com nome de "Header", e dentro da pasta Header crie um arquivo com nome de "index.js", após cole a estrutura inicial padrão abaixo:

```
function Header(){
    return(
        <header>
            <h1>Teste Header</h1>
        </header>
    )
}

export default Header;
```

### 13 - Após componente Header criado, iremos importa-lo no nosso arquivo "routes.js".

```
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';

import Header from './components/Header' // Realizando o import

function RoutesApp(){
    return(
        <BrowserRouter>

            <Header /> {/*// Inserindo o componente */}

            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/filme/:id" element={ <Filme/> } />
            </Routes>

        </BrowserRouter>
    )
}

export default RoutesApp;
```

### 14 - Dentro da pasta Header, crie o arquivo "header.css" para posteriormente realizarmos as estilizações.

### 15 - Dentro da pasta "Header", no arquivo "index.js" vamos importar "header.css" e o "Link" do react-router-dom para navegação entre as páginas, realizar algumas edições do conteúdo dentro da tag "header", e já inserir classes para estilização do header.css posteriormente.

```
import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className="logo" to="/" >Prime Flix</Link>
            <Link className="favoritos" to="/favoritos" >Meus filmes</Link>
        </header>
    )
}

export default Header;
```

### 16 - Dentro da pasta Header no arquivo header.css, vamos realizar as estilizações inserindo o conteudo abaixo no arquivo.

```
header{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: #000;
}

.logo{
    text-decoration: none;
    font-size: 30px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
}

.favoritos{
    text-decoration: none;
    cursor: pointer;
    background-color: #fff;
    padding: 5px 14px;
    color: #000;
    border-radius: 5px;
}
```

>> **Crie uma conta no site https://www.themoviedb.org/, e após vá no menu do site relacionado a API, pois precisará da sua chave api para realizarmos as requisições e pegar as imagens e informações disponiveis no site.**

### 17 - Crie uma pasta dentro da pasta SRC com o nome de "services", essa pasta sera responsáveis por armazenar nossas serviçoes. Exemplo no arquivos de API.

### 18 - Agora **instale o axios** pois utilizaremos o mesmo para realizar as requisições http.

```
npm install axios
```

### 19 - Dentro da pasta services, crie um arquivo com o nome de "api.js", nesse arquivo realizaremos a conexão com nosso site externo para capturar as informações que utilizaremos. Cole o conteúdo abaixo no arquivo com as configurações iniciais.

```
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
```

### 20 - Dentro da pasta Home no arquivo index.js, vamos realizar os imports do "useEffect", "useState" do react, da nossa "api" e o "Link" do react-router-dom, armazenar o conteudo da nossa api em uma constante e já realizar a utilização do conteudo no nosso return da nossa aplicação.


```
import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';

function Home(){
    // criando o useStates que armazenarão as mudanças na constante filme.
    const [filmes, setFilmes] = useState ([])

    // Criando o useEfect que irá identificar e setar na nossa constante setFilmes as mudanças.
    useEffect(() => {
        // Criando a função asyncrona que espera o retorno da requisição
        async function loadFilmes() {
            // Armazenando o retorno da api com seus devidos atributos na constante "response"
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "11cbcde7682214a3ba9546f966c29558",
                    linguage: "pt-BR",
                    page: 1,
                }
            })
            // Sómente para visualização exibindo o retorno dos 10 primeiros resultados no console.
            // console.log(response.data.results.slice(0, 10))

            // Armazenando o retorno da api com conteudo dos filmes na useState "setFilmes"
            setFilmes(response.data.results.slice(0, 10))
        }
        // Chamando a função
        loadFilmes();
    }, [])

    return(
        <div>
            <div className="container">
                <div className="lista-filmes">

                    {/* Realizando um loop com "map" para chamar os filmes armazenados no useState filme e exibir no navegador */}

                    {filmes.map((filme) => {
                        return(
                            <article key={filme.id}>
                                <strong>{filme.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="filme.title" />
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;
```

### 21 - Dentro da pasta Home no arquivo index.js realize o import do './home.css'. No próximo passo estaremos criando o mesmo e realizando os estilos da página Home nesse arquivo.
```
import './home.css';
```

### 22 - Dentro da pasta Home. crie o arquivo "home.css", iremos estilizar o conteudo da página.

```
.lista-filmes{
    max-width: 800px;
    margin: 14px auto;
}

.lista-filmes article{
    width: 100%;
    background-color: #fff;
    padding: 15;
    border-radius: 4px;
}

.lista-filmes strong{
    margin-top: 25px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 22px;
    display: block;
    
}

.lista-filmes img {
    width: 800px;
    max-width: 100%;
    max-height: 340px;
    object-fit: cover;
    display: block;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.lista-filmes a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    font-size: 24px;
    background-color: #116feb;
    text-decoration: none;
    color: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
```

### 23 - Dentro da pasta Home no arquivo index.js, criaremos o useStates "loading e setLoading" que armazenarão as mudanças do carregamento da página/conteúdo. Após os itens da página serem carregados setaremos como false "setLoading(false)" e faremos um if condicional.

```
const [loading, setLoading] = useState(true);
```

```
setLoading(false)
```

```
if(loading){
    return(
        <div className="loading">
                <h2>Carregando filmes...</h2>
        </div>
    )
}
```

>Segue conteúdo completo com as alterações citadas anteriormente:

```
import { useEffect, useState } from "react";
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

function Home(){
    // criando o useStates que armazenará as mudanças na constante filme.
    const [filmes, setFilmes] = useState ([]);

    // criando o useStates que armazenarão a mudança do carregamento da página/conteúdo.
    const [loading, setLoading] = useState(true);

    // Criando o useEfect que irá identificar e setar na nossa constante setFilmes as mudanças.
    useEffect(() => {
        // Criando a função asyncrona que espera o retorno da requisição
        async function loadFilmes() {
            // Armazenando o retorno da api com seus devidos atributos na constante "response"
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "11cbcde7682214a3ba9546f966c29558",
                    linguage: "pt-BR",
                    page: 1,
                }
            })
            // Sómente para visualização exibindo o retorno dos 10 primeiros resultados no console.
            // console.log(response.data.results.slice(0, 10))

            // Armazenando o retorno da api com conteudo dos filmes na useState "setFilmes"
            setFilmes(response.data.results.slice(0, 10))

            // Alterando o estado do useState "setLoading" após filmes serem carregados.
            setLoading(false)
        }
        // Chamando a função
        loadFilmes();
    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {/* Realizando um loop com "map" para chamar os filmes armazenado no useState filme e exibir no navegador */}
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;
```

### 24 - Dentro da pasta "pages" crie uma pasta com nome de "Erro", e dentro da pasta um arquivo de nome "index.js". Nele criaremos uma página padrão para mostrar algum tipo de erro na nossa aplicação.

```

```



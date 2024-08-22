# Estrutura de aplicação com REACT e recebendo dados de API externa

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

> Nessa Etapa, inicialmente criamos somente 2 arquivos/páginas (Home e Filme), porem em uma aplicação pode utilizar mais paginações.

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

### 10 - Após a criação do arquivo "routes.js", precisaremos realizar a conexão do mesmo com nosso arquivo "app.js" que é o responsável por rodar nossa aplicação, realizaremos o import do RoutesApp o componente dentro do return da function.

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

>> **Crie uma conta no site https://www.themoviedb.org/, e após vá no menu do site relacionado a API, pois precisará da sua chave api para realizarmos as requisições e pegar as imagens e informações disponibilizadas pela api/site.**

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

### 22 - Dentro da pasta Home. crie o arquivo "home.css", iremos estilizar o conteúdo da página.

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

### 24 - Dentro da pasta "pages" crie uma pasta com nome de "Erro", e dentro da pasta crie um arquivo de nome "index.js". Nele criaremos uma página padrão para mostrar algum tipo de erro que a aplicação possa apresentar e havera o link para redireciona-lo ao página "ver todos filmes". Cole a estrutura inicial abaixo no arquivo.

```
import { Link } from "react-router-dom";

function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">Ver todos os filmes</Link>
        </div>
    )
}

export default Erro;
```

### 25 - Dentro da pasta "src", no arquivo "routes.js", inclua dentro da tag "Route" a rota de erro para que a caso erro possamos mostrar a página criada no passo anterior.

```
<Route path='*' element={ <Erro/>} />
```

### 26 - Dentro da pasta "erro", crie o arquivo index.css e cole o conteúdo abaixo das estiilização das mesma.

```
.not-found{
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.not-found h1{
    font-size: 120px;
}

.not-found a{
    text-decoration: none;
    background-color: #116feb;
    color: #fff;
    padding: 10px;
    margin-top: 15px;
    border-radius: 5px;
}
```

### 27 - Dentro da pasta "Filme", no arquivo index.js realizar os imports dos hooks, do css e da api.

```
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./filme-info.css";

import api from "../../services/api";
``` 

### 28 Ainda Dentro da pasta "Filme", no arquivo index.js. Parametrizaremos a função **"Filme"** para receber conteúdo necessário para renderizar nosso filme e suas informações na tela. 

```
function Filme(){
    // criando o useParamse que irá capturar o ID do filme.
    const { id } = useParams();

    // criando o useStates que armazenará as mudanças na constante filme.
    const [filmes, setFilmes] = useState ({});

    // criando o useStates que armazenarão a mudança do carregamento da página/conteúdo.
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function loadfilme(){

            // Recebendo das dos da api
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "11cbcde7682214a3ba9546f966c29558",
                    language: "pt-BT"
                }
            })

            // .then rendereiza dos dados caso verdadeiro
            .then((response) => {
                console.log(response)
            })

            // .catch informa erro com possibilidade de tratar o mesmo
            .catch(() => {
                console.log("Filme não encontrado")
            })

            // setFilmes(response.data)

            // Alterando o estado do useState "setLoading" após filmes serem carregados.
            setLoading(false)
        }

        // Chamando a função
        loadfilme();

        return () =>{
            console.log("Componente foi desmontado")
        }
    }, [])

    // Condição para informativo de carregamento da nossa página
    if(loading){
        return(
            <div className="loading">
                <h2>Carregando detalhes do filme...</h2>
            </div>
        )
    }

    return(
        <div>
            <h1>Acessando filme {id}</h1>
        </div>
    )
}
```

### 29 Ainda Dentro da pasta "Filme", no arquivo index.js. Realizaremos as edições do "return" para definitivamente exibir o conteúdo que capturamos da nossa api.

```
return(
        <div className="filme-info"> 
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>{filme.vote_average} /10</strong>
        </div>
    )
```

>> **Segue conteúdo completo referente aos tópicos 27, 28 e 29.**

```
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./filme-info.css";

import api from "../../services/api";

function Filme(){
    // criando o useParamse que irá capturar o ID do filme.
    const { id } = useParams();

    // criando o useStates que armazenará as mudanças na constante filme.
    const [filme, setFilme] = useState ({});

    // criando o useStates que armazenarão a mudança do carregamento da página/conteúdo.
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function loadfilme(){
            
            // Recebendo das dos da api
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "11cbcde7682214a3ba9546f966c29558",
                    language: "pt-BT"
                }
            })

            // .then retorna os dados caso verdadeiro
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })

            // .catch informa erro com possibilidade de tratar o mesmo
            .catch(() => {
                console.log("Filme não encontrado")
            })

            // setFilme(response.data)

            // Alterando o estado do useState "setLoading" após filmes serem carregados.
            setLoading(false)
        }

        // Chamando a função
        loadfilme();

        return () =>{
            console.log("Componente foi desmontado")
        }
    }, [])

    // Condição para informativo de carregamento da nossa página
    if(loading){
        return(
            <div className="loading">
                <h2>Carregando detalhes do filme...</h2>
            </div>
        )
    }

    return(
        <div className="filme-info"> 
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>{filme.vote_average} /10</strong>
        </div>
    )
}

export default Filme;
```

### 30 - Dentro da pasta "Filme", cria um arquivo com nome de filme-info.css, nele estaremos estilizando a página de detalhes do filme.

```
.filme-info{
    margin: 0 auto;
    margin-top: 180x;
    display: flex;
    flex-direction: column;
    width: 800px;
    padding: 0 8px;
}

.filme-info h1 {
    margin: 14px 0;
}

.filme-info img {
    border-radius: 8px;
    width: 800px;
    max-width: 100%;
    max-height: 340px;
    object-fit: cover;
}

.filme-info h3 {
    margin-top: 14px;
}

.filme-info span {
    margin: 8px 0;
}

.area-buttons button{
    margin-right: 12px;
    margin-top: 14px;
    margin-left: 0;
    font-size: 20px;
    border: 0;
    outline: none;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.5s;
}

.area-buttons button:hover{
    background-color: brown;
    color: #fff;
}

.area-buttons a{
    text-decoration: none;
    color: #000;
    transition: all 0.5s;
}

.area-buttons a:hover{
    color: #fff;
}
```

### 31 - Dentro do arquivo da pasta "Filme", no arquivo index.js, realizar o import do useNavigation e instancie ele em uma constante dentro da function Filme.

```
import { useParams, useNavigate } from "react-router-dom";
```
```
function Filme(){ 
    // com useNavigate é possivel realizar a navecação entrega páginas
    const navigation = useNavigate();
}
```

### 31 - Após, ainda dentro do arquivo da pasta "Filme", no arquivo index.js, dentro da function Filme, e no ".catch" do UseEffect, insira o navite que realizar o redirecionamento caso usuario digite um ID incorreto manualmente na URL, o mesmo irá realizar o redirecionamento para página principal. 

```
.catch(() => {
                console.log("Filme não encontrado");
                navigate("/", {replace: true});
                return;
            })
```

### - 32 Dentro do useEffect temos dependencias externas, no caso ID do useParams e o navite, então precisamos informa-las como parametros.
    [navigate, id]

```
useEffect(() =>{
        async function loadfilme(){
            
            // Recebendo das dos da api
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: "11cbcde7682214a3ba9546f966c29558",
                    language: "pt-BT"
                }
            })

            // .then retorna os dados caso verdadeiro
            .then((response) => {
                setFilme(response.data);
                setLoading(false);
            })

            // .catch informa erro com possibilidade de tratar o mesmo
            .catch(() => {
                console.log("Filme não encontrado");
                navigate("/", {replace: true});
                return;
            })

            // Alterando o estado do useState "setLoading" após filmes serem carregados.
            setLoading(false)
        }

        // Chamando a função
        loadfilme();

        return () =>{
            console.log("Componente foi desmontado")
        }
    }, [navigate, id])
```

### 33 - Ainda no arquivo index.js de Filme, dentro do "return" na tag "button", vamos realizar o redirecionamento para ver o trailer do filme, assim que clicado no botão de "trailer'.

```
<button>
    <a target="blank" rel="external" href={`https://youtube.com/results/?search_query=${filme.title}`}>
        Trailer
    </a>
</button>
```

### 34 - Ainda no mesmo arquivo iremos criar a função para salvar o filme no local storage.
> 34.1 Dentro do retur no button com nome "Salvar" , insira o onClick no mesmo.

```
<button onClick={salvarFilme}>Salvar</button>
```
> 34.2 Após inrira a função salvarFilmes abaixo do di useEffect **fora dele**.

```
 // Função para salvar filme no local storage
  function salvarFilme() {
    // const minha lista captura o conteudo saldo no local stoorage
    const minhaLista = localStorage.getItem("@primeflix");

    // Transforma o conteudo captura no tipo JSON
    let filmesSalvos = JSON.parse(minhaLista) || [];

    // Verifica se o filme a ser salvo já não exista na lista
    const hasFilmes = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    //Condisional que mostra alerta se o filma já existe
    if (hasFilmes) {
      alert("Esse filme já está na lista");
      return;
    }

    // Adiciona com push o filme a useState Filme
    filmesSalvos.push(filme);

    // Adiciona o filme salvo no local storage passando para tipo string
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));

    // Informa Ação realizada com sucesso num alerta
    alert("Filmes salvo com sucesso");
  }
```

>> Abaixo codigo completo do arquivo index.js de Filme.
```
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./filme-info.css";

import api from "../../services/api";

function Filme() {
  // criando o useParamse que irá capturar o ID do filme.
  const { id } = useParams();

  // com useNavigate é possivel realizar a navecação entrega páginas
  const navigate = useNavigate();

  // criando o useStates que armazenará as mudanças na constante filme.
  const [filme, setFilme] = useState({});

  // criando o useStates que armazenarão a mudança do carregamento da página/conteúdo.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadfilme() {
      // Recebendo das dos da api
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "11cbcde7682214a3ba9546f966c29558",
            language: "pt-BT",
          },
        })

        // .then retorna os dados caso verdadeiro
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })

        // .catch informa erro com possibilidade de tratar o mesmo
        .catch(() => {
          console.log("Filme não encontrado");
          navigate("/", { replace: true });
          return;
        });

      // Alterando o estado do useState "setLoading" após filmes serem carregados.
      setLoading(false);
    }

    // Chamando a função
    loadfilme();

    return () => {
      console.log("Componente foi desmontado");
    };
  }, [navigate, id]);

  // Função para salvar filme no local storage
  function salvarFilme() {
    // const minha lista captura o conteudo saldo no local stoorage
    const minhaLista = localStorage.getItem("@primeflix");

    // Transforma o conteudo captura no tipo JSON
    let filmesSalvos = JSON.parse(minhaLista) || [];

    // Verifica se o filme a ser salvo já não exista na lista
    const hasFilmes = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    //Condisional que mostra alerta se o filma já existe
    if (hasFilmes) {
      alert("Esse filme já está na lista");
      return;
    }

    // Adiciona com push o filme a useState Filme
    filmesSalvos.push(filme);

    // Adiciona o filme salvo no local storage passando para tipo string
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));

    // Informa Ação realizada com sucesso num alerta
    alert("Filmes salvo com sucesso");
  }

  // Condição para informativo de carregamento da nossa página
  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando detalhes do filme...</h2>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>

      <strong>{filme.vote_average.toFixed(1)} /10</strong>

      <div className="area-buttons">
        <button onClick={salvarFilme}>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://youtube.com/results/?search_query=${filme.title}+ trailer oficial portugues dublado`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
```

### 35 - Dentro da pasta "src", crie uma posta com node de "Favoritos", e dentro dessa pasta crie o arquivo com nome de index.js e um arquivo com nome de favoritos.css.

### 36 - No arquivo index.js dentro da pasta favoritos, vamos inserir as configurações iniciais do componente conforme abaixo:

```
import { useEffect, useState } from 'react';
import './favoritos.css'

function Favoritos(){
    return(
        <div>
            <h1>Favoritos</h1>
        </div>
    )
}

export default Favoritos;

```

### 37 - Dentro da pasta "src" no arquivo routes.js, vamos inseri o caminho da nova rota criada "favoritos".
> OBS: Insira abaixo da Tag Route de Filme e acima da Tag Route de Erro.
    
```
<Route path="/favoritos" element={ <Favoritos/> } />
```

### 38 - No arquivo index.js dentro da pasta favoritos, vamos capturar a lista de filmes favoritados que foram armazenados no local storage e renderizar na tela.

> Inserindo os imports useEffect, useState, Css, link e configurando os return;

```
import { useEffect, useState } from 'react';
import './favoritos.css'
import { Link } from 'react-router-dom';

function Favoritos(){
    // Criando o use state que armazenará o estado do filme
    const [filme, setFilmes] = useState([])

    // Criando o useEffect para trazer as atualizações
    useEffect(() => {

        // contante que captará e armazenará o conteúdo do local storage
        const minhaLista = localStorage.getItem("@primeflix");

        // Alterando o conteudo capturado para formando JSON 
        setFilmes(JSON.parse(minhaLista) || []);
    
    }, [])

    return(
        <div className='meus-favoritos'>
            <h1>Meus filmes</h1>
            <ul>
                {/* Fazendo um Loop para renderizar o conteudo capturado na tela */}
                {filme.map((filme) =>{
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}> Ver detalhes do filme</Link>
                                <button>Exluir da lista</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;
```

### 39 - Exluindo filme

```
```

### 40 - Abra o terminal e realize a instalação do "react-toastify" para trazer alertas estilizados.

```
npm install react-toastify
```

### 41 - Dentro da pasta "src" no arquivo "app.js", vamos realizar o import react-toastify e também o CSS do Toast, após iremos inseri o componente na function App dentro do return.

```
import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      <RoutesApp />
    </div>
  );
}

export default App;
```

### 42 - Dentro da pasta Filme no arquivo index.js, insrira o import o toastify e edite onde os alerts estavam alocados dentro don function salvarFilme.

> import { toast } from "react-toastify";

```
//Condicional que mostra alerta se o filma já existe
if (hasFilmes) {
    toast.warning("Filme já consta na lista.")
    return;
}
```

```
// Informa Ação realizada com sucesso num alerta
toast.success("Filme salvo com sucesso!")
```

### 43 - Dentro da pasta Favoritos no arquivo index.js, insrira o import o toastify e insirá o toastify da functioo excluirFilme.

```
function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return( item.id !== id) 
        })

        setFilmes(filtroFilmes);

        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))

        toast.success("Filme removido com sucesso!")
    }
```

# Obrigado a todos e ótimo aprendizado!!!


### Autor: Denilson Ferreira de Araujo
> Redes sociais




















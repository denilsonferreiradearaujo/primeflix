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
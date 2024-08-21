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
            <div className="filme-info">
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

            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a href="#">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;
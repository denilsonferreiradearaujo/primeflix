import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./filme-info.css";
import { toast } from "react-toastify";

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

    //Condicional que mostra alerta se o filma já existe
    if (hasFilmes) {
      toast.warning("Filme já consta na lista.")
      return;
    }

    // Adiciona com push o filme a useState Filme
    filmesSalvos.push(filme);

    // Adiciona o filme salvo no local storage passando para tipo string
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));

    // Informa Ação realizada com sucesso num alerta
    toast.success("Filme salvo com sucesso!")
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

      <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>

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

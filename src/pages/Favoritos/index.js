import { useEffect, useState } from 'react';
import './favoritos.css'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

function Favoritos(){
    // Criando o use state que armazenará o estado do filme
    const [filmes, setFilmes] = useState([])

    // Criando o useEffect para trazer as atualizações
    useEffect(() => {

        // contante que captará e armazenará o conteúdo do local storage
        const minhaLista = localStorage.getItem("@primeflix");

        // Alterando o conteudo capturado para formando JSON 
        setFilmes(JSON.parse(minhaLista) || []);
    
    }, [])

    function excluirFilme(id){
        let filtroFilmes = filmes.filter( (item) => {
            return( item.id !== id) 
        })

        setFilmes(filtroFilmes);

        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes))

        toast.success("Filme removido com sucesso!")
    }

    return(
        <div className='meus-favoritos'>
            <h1>Meus filmes</h1>
            
            {filmes.length === 0 && <span> Você não possui nenhum filme salvo :( </span>}
            
            <ul>
                {/* Fazendo um Loop para renderizar o conteudo capturado na tela */}
                {filmes.map((filme) =>{
                    return(
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                                <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                <button onClick={ () => excluirFilme(filme.id) }>Exluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos;



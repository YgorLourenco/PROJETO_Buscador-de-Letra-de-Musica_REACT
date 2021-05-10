import React, {useState} from 'react'



const Formulario = ({guardarBuscaLetra}) => {

    const [busca, guardaBusca] = useState({
        artista: '',
        musica: ''
    })

    const [error, guardarError] = useState(false)

    const {artista, musica} = busca

    // Função para cada input para ler seu conteudo
    const atualizarState = e => {
        guardaBusca({
            ...busca,
            [e.target.name] : e.target.value
        })
    }

    // Consultar as APIs
    const buscarInformacao = e => {
        e.preventDefault()

        if(artista.trim() === '' || musica.trim() === '') {
            guardarError(true)
            return
        }
        guardarError(false)

        // Passar para o componente principal
        guardarBuscaLetra(busca)

    }

    return ( 
        <div className="bg-info">
            {error ? <p className='alert alert-danger text-center p-2'>Preencha os campos de Artista/Banda e Música</p> : null}
            <div className="container">
                <div className="row">
                    
                    <form 
                        onSubmit={buscarInformacao}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador de Letras de Músicas</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista/Banda</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nome de artista/banda"
                                            onChange={atualizarState}
                                            value={artista}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Música</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="musica"
                                            placeholder="Nome da música"
                                            onChange={atualizarState}
                                            value={musica}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Formulario;
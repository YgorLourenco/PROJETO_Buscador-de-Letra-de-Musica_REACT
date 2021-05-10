import { Fragment, useState, useEffect } from "react";
import Formulario from './components/Formulario'
import Musica from './components/Musica'
import axios from 'axios'


function App() {

  // Definir o state
  const [buscarLetra, guardarBuscaLetra] = useState({})
  const [letra, guardarLetra] = useState('')

  useEffect(() => {
    if(Object.keys(buscarLetra).length === 0) return; // Object.keys transforma objecto em array

    const consultarApiLetra = async () => {
      const {artista, musica} = buscarLetra
      const url = `https://api.lyrics.ovh/v1/${artista}/${musica}`

      const resultado = await axios(url)

      guardarLetra(resultado.data.lyrics)

    }
    consultarApiLetra()

  }, [buscarLetra])

  return (
      <Fragment>
        <Formulario 
          guardarBuscaLetra={guardarBuscaLetra}
        />

        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6'>

            </div>
            <div className='col-md-6'>
                <Musica 
                  letra={letra}
                />
            </div>
          </div>
        </div>

      </Fragment>
  );
}

export default App;

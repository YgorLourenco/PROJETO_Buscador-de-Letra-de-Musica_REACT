import { Fragment, useState, useEffect } from "react";
import Formulario from './components/Formulario'
import Musica from './components/Musica'
import Info from './components/Info'
import axios from 'axios'


function App() {

  // Definir o state
  const [buscarLetra, guardarBuscaLetra] = useState({})
  const [letra, guardarLetra] = useState('')
  const [info, guardarInfo] = useState({})

  useEffect(() => {
    if(Object.keys(buscarLetra).length === 0) return; // Object.keys transforma objecto em array

    const consultarApiLetra = async () => {
      const {artista, musica} = buscarLetra
      const url = `https://api.lyrics.ovh/v1/${artista}/${musica}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [letra, informacao] = await Promise.all([ // Promise.all vai executar as duas APIs ao mesmo tempo
        axios(url),
        axios(url2)
      ])

      guardarLetra(letra.data.lyrics)
      guardarInfo(informacao.data.artists[0])

      // const resultado = await axios(url)
      // guardarLetra(resultado.data.lyrics)

    }
    consultarApiLetra()

  }, [buscarLetra, info])

  return (
      <Fragment>
        <Formulario 
          guardarBuscaLetra={guardarBuscaLetra}
        />

        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-6'>
                <Info 
                  info={info}
                />
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

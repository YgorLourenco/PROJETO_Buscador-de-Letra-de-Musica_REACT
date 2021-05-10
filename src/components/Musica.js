import React, { Fragment } from 'react'

const Musica = ({letra}) => {

    if(letra.length === 0) return null;

    return ( 
        <Fragment>
            <h2>Letra da musica</h2>
            <p className='letra'>{letra}</p>
        </Fragment>
     );
}
 
export default Musica;
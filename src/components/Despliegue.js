import React from 'react'

export default function Despliegue({curso,guardarCurso}) {
    return (
        <div className="desplegar">
            <div className="guardados">
                {curso.map( (uno) =>(
                    <div>
                        
                        <h3>{uno.titulo}</h3>
                        <p>{uno.descripcion}</p>
                        <p>{uno.precio}</p>
                    </div>
     ) )}
            </div>
        </div>
    )
}

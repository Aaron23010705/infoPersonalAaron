import React from 'react';

function Aaron({nombre, edad, especialidad, dirección, fechaNacimiento, código}) {
    return (
        <div>
            <h1>
                Nombre: {nombre}
                <br></br>
                Edad: {edad}
                <br></br>
                Especialidad: {especialidad},
                <br></br>
                dirección: {dirección},
                <br></br>
                Fecha de Nacimiento {fechaNacimiento}
                <br></br>
                Código: {código}
            </h1>
            
        </div>
    );
}

export default Aaron;
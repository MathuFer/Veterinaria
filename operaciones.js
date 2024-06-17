const fs = require('fs')

const registrar = (nombre, edad, animal, color, enfermedad) =>{
    const registros = JSON.parse(fs.readFileSync('citas.json', 'utf8'))
    const nuevoRegistro = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    }
    registros.push(nuevoRegistro)
    fs.writeFileSync('citas.json', JSON.stringify(registros))
}

const leer = () =>{
    const citas = fs.readFileSync('citas.json', 'utf8')

    const citasJSON = JSON.parse(citas)
    for (const registro of citasJSON){
        console.log(registro)
    }
}   


module.exports = {registrar, leer}

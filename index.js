const {registrar, leer} = require('./operaciones')

const [operaciones, nombre, edad, animal, color, enfermedad] = process.argv.slice(2)

if (operaciones === 'registrar'){
    registrar(nombre, edad, animal, color, enfermedad)
} else if (operaciones === "leer"){
    leer()
}else{
    console.log('operacion no valida')
}
const fs = require('fs');
const crearArchivo = async (valor = 5, listar = false, hasta = 1) =>{

    let salida = '';

    try{

        for (let index = 1; index <= hasta; index++) {
            salida += `${valor} x ${index} =  ${valor * index}\n`;    
        }
        
        if(listar)
            console.log(salida);
    
        fs.writeFileSync(`./salida/tabla-${valor}.txt`, salida)
        return `tabla-${valor}.txt creada`;

    }catch(err){
        throw err;
    }    
}

module.exports = {
    crearArchivo
}

const fs = require('fs');
const path = require('path');


const listImagePath = (pathImagenes) => {

    return new Promise((resolve, reject) => {
            fs.readdir(pathImagenes, (err, files) => {
            if (err) {
                reject(err);
            } else {
                // Filtrar solo los archivos de imagen (puedes ajustar las extensiones según tus necesidades)
                const imagenes = files.filter(file => {
                const extension = path.extname(file).toLowerCase();
                return ['.jpg', '.jpeg', '.png', '.gif', '.bmp'].includes(extension);
                });

             const rutasDeImagenes = imagenes.map(imagen => path.join(pathImagenes, imagen));

        resolve(rutasDeImagenes);
      }
    });
  });

}


module.exports = {
    listImagePath
}
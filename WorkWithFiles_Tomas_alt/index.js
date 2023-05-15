const fs = require('fs').promises;
GiveResultWords("package.json");


console.log("Bem-vindo formador \n");


async function GiveResultWords(fileName){
    
    try {

    const resultado = await fs.readFile(fileName, 'utf-8');

    const words = resultado.split(" ").filter(word => word.length > 0);

    const numWords = words.length;

    const resultWords = `${fileName} contém ${numWords} palavras`;

    await fs.writeFile('resultados/resultado.txt', resultWords);

    console.log(resultWords);

} catch (error) {
    console.log('Ficheiro não encontrado');
}

}



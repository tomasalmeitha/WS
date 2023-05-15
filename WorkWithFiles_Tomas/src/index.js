const fs = require('fs').promises;
const readLine = require('readline-sync');


console.log("Bem-vindo formador \n");

var filePath = readLine.question("Indique o caminho do ficheiro: ");

CountWords(filePath);


async function CountWords(filePath){

    try {
        const text = String(await fs.readFile(filePath));
        const words = text.split(" ").filter(word => word.length > 0);
        const numWords = words.length;
        WriteFile(`${filePath} contém ${numWords} palavras`);
    }

catch {
    WriteFile(`${filePath} não existe`);
}

async function WriteFile(content){
    console.log(content);
    await fs.writeFile("resultados.txt", content+'\r\n', {flag: "a"});
}

}
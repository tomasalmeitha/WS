const { writeFile } = require('fs');
const { buffer } = require('stream/consumers');

const fs = require('fs').promises;
ReadDir("stores");
ReadDir2("stores");
ReadFile("stores/sales.json");
TransformFileInObject("stores/sales.json");


async function ReadDir(folderName){

    const items = await fs.readdir("stores");

    console.log(items);
}

async function ReadDir2(folderName){
    const items = await fs.readdir(folderName, {withFileTypes: true});
    for (let item of items){
        const type = item.isDirectory() ? "folder" : "file";
        console.log(`{$item.name}: ${type}`);
    }
}

async function ReadFile(fileName){
    
    const bufferData = await fs.readFile(fileName);
    console.log(bufferData);
    console.log(String(bufferData));
    await fs.writeFile("stores/totals.txt", String(bufferData));
}

async function TransformFileInObject(fileName){
    
    const sales = JSON.parse(await fs.readFile(fileName));
    /* await fs.writeFile("stores/total.txt", JSON.stringify(sales)); */

}

class Clube {

    constructor(Id, NomeClube){
        this.Id = Id;
        this.NomeClube = NomeClube;
    }
}

class Jogador {
    constructor(Id, NomeJogador, Clube) {
        this.Id = Id;
        this.NomeJogador = NomeJogador;
        this.Clube = Clube;
    }
}

module.exports = {Clube, Jogador}
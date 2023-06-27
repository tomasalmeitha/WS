class Aluno {
    constructor(Name, BirthDate, Average, Avaliacoes) {
        this.Name = Name;
        this.BirthDate = BirthDate;
        this.Average = Average;
        this.Avaliacoes = Avaliacoes;
    }
}

class Avaliacao {
    constructor(Description, Result){
        this.Description = Description;
        this.Result = Result;
    }
}

module.exports = { Aluno, Avaliacao}



class Turma {

    constructor(Description, StartDate, EndDate, Alunos){
        this.Description = Description;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
        this.Alunos = Alunos;
    }
}

class Aluno {
    constructor(Name, BirthDate) {
        this.Name = Name;
        this.BirthDate = BirthDate;
    }
}

class Avaliacao {
    constructor(Description, Result){
        this.Description = Description;
        this.Result = Result;
    }
}

module.exports = {
    Turma, Aluno
}
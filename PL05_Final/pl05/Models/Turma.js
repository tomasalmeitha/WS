class Turma {

    constructor(Description, StartDate, EndDate, Alunos){
        this.Description = Description;
        this.StartDate = StartDate;
        this.EndDate = EndDate;
        this.Alunos = [Alunos];
    }
}

class AlunoSimple {
    constructor(Name, BirthDate) {
        this.Name = Name;
        this.BirthDate = BirthDate;
    }
}

module.exports = {AlunoSimple,Turma }
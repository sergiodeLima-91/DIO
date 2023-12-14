function DigaSeEhMenorOuMaior(idade){
    if (idade >= 18){
        return 'MAIOR DE IDADE';
    } else{
        return 'MENOR DE IDADE';
    }
};

const idade = 17;
console.log(DigaSeEhMenorOuMaior(idade));

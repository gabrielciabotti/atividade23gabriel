//criar um sistema que receba um número de 1 a 7 e retorne
//o nome do dia da semana escrito.
const numeroDia = +prompt('digite o numero da semana!');
const diaSemanaUm = 1;

switch (numeroDia) {
    case diaSemanaUm: //numeroDia === diaSemanaUm (1)
        console.log('Domingo');
        break; //faz parar o switch, se não ele vai continuar. --davi
    case 2: //numeroDia === 2
        console.log('segunda-feira');
        break;
    case 8: //caso fall-through, ele aceita 8 e/ou 9 e printa "Seu Armando!"
    case 9:
        {
            console.log('Seu Armando!');
            //faz seu código aqui!
            break;
        }
    default: //caso nenhuma opção atenda o buscado.
        console.log('dia não encontrado');
        break;
}
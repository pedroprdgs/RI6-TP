import * as readline from 'readline'
import Mensagens from './types/Mensagens.js'
import Divisao from './types/Divisao.js'
import Multiplicacao from './types/Multiplicacao.js'
import Potenciacao from './types/Potenciacao.js'
import Radiciacao from './types/Radiciacao.js'
import Soma from './types/Soma.js'
import Subtracao from './types/Subtracao.js'

export default class Calculadora{
    private mensagens = new Mensagens();

    public iniciar(){
        this.mensagens.boasVindas();
        this.mensagens.listarOpcoes();
        this.mensagens.comoUsar();

        this.perguntar();
    }

    private perguntar(){
        const leitor = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        leitor.question('Quais são seus números e a operação desejada?\n', valor => {
            const instrucoes = valor.split(' ');

            const numero1 = Number(instrucoes[0]);
            const numero2 = Number(instrucoes[1]);

            let operacao = instrucoes[2];

            if(instrucoes.length == 1){
                operacao = instrucoes[0];
            }

            operacao = operacao?.toUpperCase();

            let calculo;

            switch(operacao){
                case 'SOMAR':
                    calculo = new Soma();
                    break;
                case 'SUBTRAIR':
                    calculo = new Subtracao();
                    break;
                case 'MULTIPLICAR':
                    calculo = new Multiplicacao();
                    break;
                case 'DIVIDIR':
                    calculo = new Divisao();
                    break;
                case 'POTENCIA':
                    calculo = new Potenciacao();
                    break;
                case 'RADICIACAO':
                    calculo = new Radiciacao();
                    break;
                case 'SAIR':
                    console.log('Até mais...');
                    leitor.close();
                    process.exit();
                default:
                    console.log('Operação inválida. escolha uma operação dentre (Somar | Subtrair | Multiplicar | Dividir | Potencia | Radiciacao)');
                    leitor.close();
                    this.perguntar();
                    return;
            }
            console.log(`Estas foram suas instruções: ${instrucoes.join(', ')}\n`);

            leitor.close();

            console.log(`O resultado da operação é: ${calculo?.calcular(numero1, numero2)}\n`);
            console.log('-'.repeat(20) + '\n');

            this.perguntar();
        });
    }
}
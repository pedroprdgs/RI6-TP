import Calculo from "./Calculo.js";

export default class Radiciacao extends Calculo{
    public calcular(numero1: number, numero2: number): number{
        return Math.pow(numero1, (1 / numero2)); // Eleva o primeira numero pela divisão de um sobre o segundo número
    }
}
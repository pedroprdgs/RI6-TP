import Calculo from "./Calculo.js";

export default class Potenciacao extends Calculo{
    public calcular(numero1: number, numero2: number): number{
        return Math.pow(numero1, numero2);
    }
}
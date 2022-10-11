export function Acai(peq, med, grande, desc) {
    try {

        if (peq < 0 || med < 0 || grande < 0 || desc < 0) throw new Error("valor inválido")
        if (desc > 100) throw new Error("desconto inválido")
        if (parseInt(peq) != parseFloat(peq) || parseInt(med) != parseFloat(med) || parseInt(grande) != parseFloat(grande)) throw new Error("valor inválido")

        let total = (peq * 13.5) + (med * 15) + (grande * 17.5);
        let desconto = total * (desc / 100);
        return total - desconto;
    } catch (err) {
        return err.message
    }

}

export function Signo(mes, dia) {
    try {
        if (dia > 30 || dia <= 0) throw new Error("dia inválido")
        if (!isNaN(mes)) throw new Error("mês inválido")

        let a = mes.toLowerCase();
        return a == 'setembro' && dia >= 23 || a == 'outubro' && dia <= 22;

    } catch (err) {
        return err.message
    }

}

export function sorvete(gramas) {
    try {

        if (gramas <= 0) throw new Error("Valor inválido")

        let r = 0;
        if (gramas < 1000)
            r = (3.50 * (gramas / 100)).toFixed(2)
        else
            r = (3 * (gramas / 100)).toFixed(2)

        return r;
    } catch (err) {
        return err.message
    }

}

export function CalcularParadas(capac, consumo, dist) {
    try {
        if (capac <= 0 || consumo <= 0 || dist <= 0) throw new Error("VALOR INVÁLIDO")

        let litros = dist / consumo;
        let paradas = litros / capac;

        return Math.ceil(paradas)
    } catch (err) {
        return err.message;
    }
}

export function febre(temp) {

    try {

        if (temp <= 0) throw new Error("Insira uma temperatura válida")

        let mg = '';
        if (temp >= 41) {
            mg = 'Hipertermia';
        }
        else if (temp >= 39.6 && temp < 41)
            mg = 'Febre Alta';

        else if (temp >= 37.6 && temp < 39.6)
            mg = 'Febre';

        else if (temp == 36 && temp < 37.6)
            mg = 'Normal';

        else if (temp < 36)
            mg = 'Hipotermia';

        return mg;
    } catch (err) {
        return err.message;
    }
}

export function Liquido(salario, bonus, desc) {
    try {

        if (salario <= 0 || bonus <= 0 || desc <= 0) throw new Error("INSIRA UM NÚMERO VÁLIDO");

        let b = salario * bonus / 100;
        let s = salario - desc + b;
        return s;
    } catch (err) {
        return err.message;
    }
}
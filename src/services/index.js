export function Acai(peq, med, grande, desc) {
    try {

        if (peq < 0 || med < 0 || grande < 0 || desc < 0) throw new Error("valor inválido")
        if (desc > 100) throw new Error("desconto inválido")
        if (parseInt(peq) != parseFloat(peq) || parseInt(med) != parseFloat(med) || parseInt(grande) != parseFloat(grande) ) throw new Error("valor inválido") 

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
        if (gramas <= 0)
            r = 'Peso Inválido';
        else if (gramas < 1000)
            r = `O Total a se pagar é: ${(3.50 * (gramas / 100)).toFixed(2)}`
        else
            r = `O total a se pagar é: ${(3 * (gramas / 100)).toFixed(2)}`

        return r;
    } catch (err) {
        return err.message
    }

}

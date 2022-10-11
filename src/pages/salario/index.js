import { useState } from "react"

export default function Index(){

    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desc, setDesc] = useState(0)
    const [resposta, setResposta] = useState()

    function Liquido () {
        try {
            let b = salario*bonus/100;
            let s = salario - desc + b;
            setResposta(s); 
        } catch (err) {
            setResposta(err.message)
        }
    }

    return(
        <div>
            <h1>Salário</h1>
            <p>Insira o salário <input type="number" value={salario} onChange={e => setSalario(e.target.value)} /> </p>
            <p>Insira o bônus <input type="number" value={bonus} onChange={e => setBonus(e.target.value)} /> </p>
            <p>Insira o desconto <input type="number" value={desc} onChange={e => setDesc(e.target.value)} /> </p>
            <button onClick={Liquido}>Calcular</button>
            <h2>{resposta}</h2>
        </div>
    )
}
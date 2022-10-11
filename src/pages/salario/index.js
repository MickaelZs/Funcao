import { useState } from "react"
import { Liquido } from "../../services"

export default function Index(){

    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desc, setDesc] = useState(0)
    const [resposta, setResposta] = useState()

    function salLiquido () {
        const resp = Liquido(salario, bonus, desc);
        if (isNaN(resp))
            setResposta(resp)
        else 
            setResposta(`Serão necessárias ${resp.toFixed(1)} paradas`) 
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
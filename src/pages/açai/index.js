import { useState } from "react"
import { Acai } from '../../services/index.js'

export default function Index(){

    const [pequeno, setPequeno] = useState(0);
    const [medio, setMedio] = useState(0);
    const [grande, setGrande] = useState(0);
    const [desconto, setDesconto] = useState(0);
    const [resposta, setResposta] = useState();

    function CalcularAcai () {
        const resp = Acai(pequeno, medio, grande, desconto);
        if (isNaN(resp))
            setResposta(resp)
        else 
            setResposta(`O total a se pagar é R$${resp.toFixed(2)}`.replace('.', ','))
    }

   
    
    return(
        <div>
            <h1>Açaí</h1>
            <h2>Insira as quantidades:</h2>
            <p>Açaí pequeno: <input type="number" value={pequeno} onChange={e => setPequeno(e.target.value)} /> </p>
            <p>Açaí Médio: <input type="number" value={medio} onChange={e => setMedio(e.target.value)} /> </p>
            <p>Açaí Grande: <input type="number" value={grande} onChange={e => setGrande(e.target.value)} /> </p>
            <p>Desconto: <input type="number" value={desconto} onChange={e => setDesconto(e.target.value)} /> </p>
            <button onClick={CalcularAcai}>Calcular</button>
            {resposta}
        </div>

    )
}
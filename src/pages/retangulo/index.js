import { useState } from "react"
import { retangulo } from "../../services";

export default function Index(){

    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [resposta, setResposta] = useState();

    function Click() {
        const resp = retangulo(base, altura);
        setResposta(resp);
        console.log(resp);
    }

    return(
        <div>
            <h1>Retângulo</h1>
            <p>Insira o tamanho da base: <input type="number" value={base} onChange={e=> setBase(e.target.value)} /></p>
            <p>Insira a altura: <input type="number" value={altura} onChange={e=> setAltura(e.target.value)} /></p>
            <button onClick={Click}>Gerar Retângulo</button>
            <p>{resposta}</p>
        </div>
    )
}
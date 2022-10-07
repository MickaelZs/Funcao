import { useState } from "react"
import { sorvete } from "../../services"

export default function Index(){

    const [gramas, setGramas] = useState(0);
    const [resposta, setResposta] = useState('');

    function Preco () {
        const resp = sorvete(gramas);
        setResposta(resp)
    }
 
    return(
        <div>
            <h1>Sorveteria</h1>
            <p>Insira a quantidade de gramas: <input type="number" value={gramas} onChange={e => setGramas(e.target.value)} /></p>
            <button onClick={Preco}>Calcular</button>
            {resposta}
        </div>

    )
}
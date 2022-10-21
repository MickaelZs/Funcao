import { useEffect, useState } from "react"
import { jurosCompostos } from "../../services";

export default function Index() {

    const [entrada, setEntrada] = useState();
    const [capital, setCapital] = useState();
    const [taxa, setTaxa] = useState();
    const [periodo, setPeriodo] = useState();
    const [resposta, setResposta] = useState([]);

    function Juros () {
        const resp = jurosCompostos(entrada, capital, taxa, periodo);
        setResposta(resp);
        console.log(resp)
    }

    

    return(
        <main>
            <h2>Aniversário do Brunex!! 🥳🥳🥳</h2>
            <h1>Cálculo de juros compostos</h1>
            <p>Insira o capital: <input type="number" value={capital} onChange={e => setCapital( Number(e.target.value) )} /></p>
            <p>Insira a entrada: <input type="number" value={entrada} onChange={e => setEntrada( Number(e.target.value) )} /></p>
            <p>Insira a taxa (anual): <input type="number" value={taxa} onChange={e => setTaxa( Number(e.target.value) )} /></p>
            <p>Insira o periodo: <input type="number" value={periodo} onChange={e => setPeriodo( Number(e.target.value) )} /></p>
            <button onClick={Juros}>Calcular</button>
            {resposta}            
        </main>
        
    )
}
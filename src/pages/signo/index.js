import { useState } from "react"
import { Signo } from "../../services/index.js"

export default function Index(){

    const [mes, setMes] = useState('');
    const [dia, setDia] = useState(0);
    const [resposta, setResposta] = useState('');

    function Libra () {
        const resp = Signo(mes, dia);
        if (isNaN(resp)) setResposta(resp)
        else if (resp == true) setResposta('É do signo Libra? Sim')
        else setResposta('É do signo Libra? Não')
        
    }

    return(
        <div>
            <h1>Signo</h1>
            <h2>Insira a data:</h2>
            <p>Dia: <input type="number" value={dia} onChange={e =>  setDia(e.target.value)} /> </p>
            <p>Mês: <input type="text" value={mes} onChange={e =>  setMes(e.target.value)} /> </p>
            <button onClick={Libra}>Verificar</button>
            <p> {resposta} </p> 
        </div>

    )
}
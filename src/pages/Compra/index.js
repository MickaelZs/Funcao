import { useState } from "react";
import { totalCompra } from "../../services";

export default function Index () {

    const [inteiras, setInteiras] = useState(0);
    const [meias, setMeias] = useState(0);
    const [diaSemana, setDiaSemana] = useState('');
    const [nacional, setNacional] = useState(false);
    const [resposta, setResposta] = useState();

    function Compra () {
        const resp = totalCompra(inteiras, meias, diaSemana, nacional);
        if (isNaN(resp))
            setResposta(resp)
        else 
            setResposta(`O total a se pagar é R$${resp.toFixed(2)}`.replace('.', ','))
    }

    console.log(nacional);
    return (
        <main>
            <h1>Compra</h1>
            <p>Insira a quantidade de inteiras: <input type="number" value={inteiras} onChange={e=> setInteiras(e.target.value)} /></p>
            <p>Insira a quantidade de meias: <input type="number" value={meias} onChange={e=> setMeias(e.target.value)} /></p>
            <p>Insira o dia da semana: <input type="text" value={diaSemana} onChange={e=> setDiaSemana(e.target.value)} /></p>
            <p>Nacional <input type="checkbox" value={nacional} onChange={e => setNacional(e.target.checked)} /></p>
            <button onClick={Compra}>Calcular</button>
            <h4>{resposta}</h4>
            
        </main>
    );
}   
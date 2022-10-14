import { useState } from "react";
import { sitOrcamento } from "../../services";

export default function Index () {

    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);
    const [resposta, setResposta] = useState();

    function Familia () {
        const resp = sitOrcamento(ganhos, gastos);
        setResposta(resp);
    }

    return (
        <main>
            <h1>Orçamento</h1>

            <p>Insira os ganhos do mês: <input type="number" value={ganhos} onChange={e => setGanhos(e.target.value)} /></p>
            <p>Insira os gastos do mês: <input type="number" value={gastos} onChange={e => setGastos(e.target.value)} /></p>
            <button onClick={Familia}> Calcular </button>
            <h4>{resposta}</h4>

        </main>
    );
}
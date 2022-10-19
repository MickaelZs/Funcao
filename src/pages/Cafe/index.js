import { useEffect, useState } from "react";
import { queroCafe } from "../../services";

export default function Index () {

    const [n, setN] = useState();
    const [l, setL] = useState();
    const [d, setD] = useState();
    const [resposta, setResposta] = useState();

    function cafezinho () {
        const resp = queroCafe(n, l, d)
        setResposta(resp)
    }

    useEffect(() => {
        cafezinho()
    }, [n, l, d])

    return (
        <main>
            <h1>QUERO CAFEE</h1>
            <p>Insira a quantidade de alunos: <input type="number" value={n} onChange={e => setN(e.target.value)}/></p>
            <p>Insira a capacidade da cafeteira: <input type="number" value={l} onChange={e => setL(e.target.value)}/></p>
            <p>Insira a quantidade que cada aluno: <input type="number" value={d} onChange={e => setD(e.target.value)}/></p>
            {resposta}

        </main>
        
        
    );
}
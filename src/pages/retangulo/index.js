import { useState } from "react"
import { retanguloBola, retanguloAst } from "../../services";

export default function Index(){

    const [base, setBase] = useState();
    const [altura, setAltura] = useState();
    const [respostaBola, setRespostaBola] = useState([]);
    const [respostaAst, setRespostaAst] = useState([]);

    function Click() {
        const bola = retanguloBola(base, altura);
        const ast = retanguloAst(base, altura);
        setRespostaBola(bola);
        setRespostaAst(ast);
    }

    return(
        <div>
            <h1>Retângulo</h1>
            <p>Insira o tamanho da base: <input type="number" value={base} onChange={e=> setBase(e.target.value)} /></p>
            <p>Insira a altura: <input type="number" value={altura} onChange={e=> setAltura(e.target.value)} /></p>
            <button onClick={Click}>Gerar Retângulo</button>
            
            {respostaBola.map(item => 
                <div>
                    {item}
                </div>
                )}

            {respostaAst.map(item => 
                <div>
                    {item}
                </div>
                )}

        </div>
    )
}
import { useState } from "react"
import { contarAte } from "../../services"

export default function Index(){

    const [resp,setResp] = useState([])
    const [inicio,setInicio] = useState('')
    const [fim,setFim] = useState('')

    function click (){
        const x = contarAte(inicio,fim)
        setResp(x)
    }


    return(
        <main>
            <div>
               Inicio <input type="text" value={inicio} onChange={e => setInicio(e.target.value)}/>
               Fim <input type="text" value={fim} onChange={e => setFim(e.target.value)}/>
            </div>

            {resp.map(item =>
            <div>
                {item}
            </div>
            )}

            <div>
                <button onClick={click}>CLICARRRRRRRRRR</button>
            </div>

        </main>
    )
}
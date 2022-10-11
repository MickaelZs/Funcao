import { useState } from "react";
import { febre } from '../../services/index.js'


export default function Index(){
    const [resp,setResp] = useState ();
    const [temp,setTemp] = useState ();

    function situacao () {
        const resp = febre(temp);
        if (resp != 'Hipotermia' || resp != 'Normal' || resp != 'Febre' || resp != 'Febre Alta' || resp != 'Hipertermia')
            setResp(resp)
        else 
            setResp(`A situação para a sua temperatura é ${resp}`)
    }
    
    return(
        <div>
            <input type="number" value={temp} onChange={e =>  setTemp(e.target.value)} />
            <button onClick={situacao} > clicar aiiiii</button>
            {resp}

        </div>
    )
}
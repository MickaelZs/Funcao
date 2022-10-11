import { useState } from "react";

export default function Index(){
    const [resp,setResp] = useState ();
    const [temp,setTemp] = useState ();

    function febre (){
        let mg = '';
        if(temp >= 41){
            mg='Hipertermia';
        }
        else if(temp >= 39.6 && temp < 41) 
            mg = 'Febre Alta';
        
        else if( temp >= 37.6 && temp < 39.6) 
            mg = 'Febre';
        
        else if(temp == 36 && temp < 37.6)
            mg ='Normal';
        
        else if (temp < 36)
        mg = 'Hiportemia';

        setResp('a situaçao para sua temperatura é ' + mg)
        
    }
    
    return(
        <div>
            <input type="number" value={temp} onChange={e =>  setTemp(e.target.value)} />
            <button onClick={febre} > clicar aiiiii</button>
            {resp}

        </div>
    )
}
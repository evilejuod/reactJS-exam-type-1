import React, {useContext, useEffect, useState} from 'react';

function CompB(props) {

    const [ msg, setMsg ] = useState('')

    const handleMsg = () => {
        if(props.counter >= 100) return setMsg('Didinti nebegalima')
    }

    return (
    <div>
        <h2>CompB</h2>
        <p >{msg}</p>
    </div>
  );
}

export default CompB;

import React, { useState } from "react";
import "../Form/Form.css"

const Form = () => {
    const [country, setCountry] = useState()
    const [street, setStreet] = useState()
    const [state, setState] = useState()
    const [zip, setZip] = useState()
    const [subject, setSubject] = useState('physical')

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeState = (e) => {
        setState(e.target.value)
    }
    
    const onChangeZip = (e) => {
        setZip(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
 
    return (
        <div className="Form">
            <h3>Type your data</h3>
            <input type="text" value={country} onChange={onChangeCountry} placeholder={'Country'} />
            <input type="text" value={street} onChange={onChangeStreet} placeholder={'Street'} />
            <input type="text" value={state} onChange={onChangeStreet} placeholder={'State'} />
            <input type="text" value={zip} onChange={onChangeZip} placeholder={'Zip'} />

            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>Phiz.lico</option>
                <option value={'legal'}>Your.lico</option>
            </select>
        </div>
    )
}

export default Form
import React, { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "../Form/Form.css"

const Form = () => {
    const [country, setCountry] = useState()
    const [street, setStreet] = useState()
    const {tg} = useTelegram()

    const onSendData = useCallback(() => {
        const data ={ 
            country,
            street,
        }
        tg.sendData(JSON.stringify(data))
    })

    useEffect(() => {
        tg.onEvent("mainButtonClicked", onSendData)
        return () => {
            tg.offEvent("mainButtonClicked", onSendData)
        }
    }, [])


    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Send data'
        })
    })

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
 
    return (
        <div className="Form">
            <h3>Type your data</h3>
            <input type="text" value={country} onChange={onChangeCountry} placeholder={'Country'} />
            <input type="text" value={street} onChange={onChangeStreet} placeholder={'Street'} />
        </div>
    )
}

export default Form
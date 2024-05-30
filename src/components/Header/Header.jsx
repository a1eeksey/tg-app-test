import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";
import "./Header.css"

const Header = () => {
    const {tg, user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                User: {user}
            </span>
        </div>
    )
}

export default Header
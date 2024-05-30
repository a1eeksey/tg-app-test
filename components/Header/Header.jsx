import React from "react";
import { useTelegram } from "../../src/hooks/useTelegram";

const Header = () => {
    const {tg, user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header
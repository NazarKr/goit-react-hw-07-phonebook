import React from 'react';
import { ButtoIconStyled } from './ButtonIcon.style'


const ButtonIcon = ({ icon: Icon = null, type, disabled, children, onClick, iconSize, primary }) => {
    return (
        <>
            <ButtoIconStyled
                primary={primary}
                type={type}
                disabled={disabled}
                onClick={onClick}
            >{Icon && <Icon size={iconSize} />}

                {children}
            </ButtoIconStyled>
        </>
    )
}

ButtonIcon.defaultProps = {
    onClick: () => null,
    children: null,
    // primary: null,
};


export default ButtonIcon;
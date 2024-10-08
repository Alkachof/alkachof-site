

const buttonStyles = {
    primary: "button-primary",
    secondary: "button-secondary",
    link: "button-link",
}

function Button({text="Aceptar", onClick, type }) {
    return (
        <button className={`button ${buttonStyles[type]}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
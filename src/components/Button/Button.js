import './Button.css';

const Button = ({ variant, children, onClick, onSubmit }) => {
    const classes = `button ${variant}`;

    return (
        <button className={classes} onClick={onClick} onSubmit={onSubmit}>
            {children}
        </button>
    )
}

export default Button;
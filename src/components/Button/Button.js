import './Button.css';

const Button = ({ variant, children, onClick, onSubmit, addItem, removeItem }) => {
    const classes = `button ${variant}`;

    return (
        <button className={classes} onClick={onClick}
        onSubmit={onSubmit} addOnClick={addItem} removeOnClick={removeItem}>
            {children}            
        </button>
    )
}


export default Button;

/*const Button = ({children, ...props}) => {
    return (
        <button {...props}>
        {children}
    </button>
    );
};*/



function Button(props) {
    return (
        <div>
            <button className={`${props.styleName}`}>{props.text}</button>
        </div>
    );
}

export default Button;

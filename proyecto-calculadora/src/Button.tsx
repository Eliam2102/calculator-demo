function Button({value, onclick}: {value: string; onclick:() => void}){
    return <button onClick={onclick}>{value}</button>
}

export default Button;
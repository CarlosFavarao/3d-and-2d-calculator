type ButtonProps = {
    label: string
    onClick: (label: string) => void
}

export function Button({label, onClick}: ButtonProps) {
    return (
        <button 
            className="w-full bg-gray-400 hover:bg-gray-500 p-4 rounded text-2xl"
            onClick= {() => onClick(label)}
        >
            {label}    
        </button>
    )
}

export function OperatorsButton({label, onClick}: ButtonProps) {
    return (
        <button
            className="w-full bg-orange-400 hover:bg-orange-500 active:bg-orange-300 p-4 rounded text-2xl"
            onClick={() => onClick(label)}
        >
            {label}
        </button>
    )
}

export function ClearEqualsButton({label, onClick}: ButtonProps) {
    return (
        <button
            className="w-full bg-black hover:bg-gray-900 active:bg-gray-500 p-4 rounded text-2xl"
            onClick={() => onClick(label)}
        >
            {label}
        </button>
    )
}
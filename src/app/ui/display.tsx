type DisplayProps = {
    value: string | null;
};

export function Display({value}: DisplayProps) {
    return (
        <div className="bg-gray-800 text-white p-4 rounded text-right text-3xl">
            {value}
        </div>
    )
}
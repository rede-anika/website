import { ButtonProps } from "./properties";

export function Button({ label }: ButtonProps) {
    return (
        <>
            <button>{label}</button>
        </>
    );
}

import { IconButtonProps } from "./properties";
import "bootstrap-icons/font/bootstrap-icons.css";

export function IconButton({ label, icon }: IconButtonProps) {
    return (
        <>
            <button>
                {label}
                <i className={icon}></i>
            </button>
        </>
    );
}

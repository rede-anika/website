import { IconButtonProps } from "./properties";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./IconButton.css";

export function IconButton({ label, icon }: IconButtonProps) {
    let iconStyle = {};
    if (label) {
        iconStyle = { marginLeft: "8px" };
    }
    return (
        <>
            <button>
                {label}
                <i className={icon} style={iconStyle}></i>
            </button>
        </>
    );
}

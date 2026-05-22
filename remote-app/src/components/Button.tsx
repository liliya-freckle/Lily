import './Button.css'

interface ButtonProps {
    text: string,
    variant?: "primary" | "secondary"

}

export const Button = (props: ButtonProps) => {
    const {text, variant = "primary"} = props;

    const variantClass = variant === "primary" ? "btn--primary" : "btn--secondary";

    return <button type="button" className={`btn ${variantClass}`}>
    {text}
    </button>
}

export default Button;
export default function TextInput ({ type = "text", placeholder = "Type here", className = "", ...props }) {
    return (
        <input type={type} placeholder={placeholder} className={`input ${className}`} {...props} />
    )
}
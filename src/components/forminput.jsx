export default function InputField({
    type = "text",
    name,
    placeholder = "",
    value,
    touched,
    onChange,
    onBlur,
    error,
}) {
    const borderColor =
        error && touched ? "border-red-500" : "border-[#373737]";
    return (
        <>
            <input
                className={`relative z-20 w-full px-4 h-[44px] bg-[#171717] border ${borderColor} focus:border-[#F3FE00] rounded-[8px] text-[#B9B9B9] text-sm font-medium font-[Inter] outline-none`}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />

        </>
    );
}

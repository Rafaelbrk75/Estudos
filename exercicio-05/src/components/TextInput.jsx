import PropTypes from "prop-types";

export default function TextInput({ id, label, value, setValue, type = "text", isTextarea = false }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            {isTextarea ? (
                <textarea
                    id={id}
                    name={id}
                    value={value}
                    placeholder={`Digite ${label.toLowerCase()}`}
                    required
                    onChange={(e) => setValue(e.target.value)}
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={id}
                    name={id}
                    value={value}
                    placeholder={`Digite ${label.toLowerCase()}`}
                    required
                    onChange={(e) => setValue(e.target.value)}
                />
            )}
        </div>
    );
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    type: PropTypes.string,
    isTextarea: PropTypes.bool
};
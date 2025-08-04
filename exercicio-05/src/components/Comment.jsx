import PropTypes from "prop-types";

export default function Comment({ email, comment }) {
    return (
        <div>
            <span>{email}</span>
            <span>{comment}</span>
        </div>
    )
}

Comment.propTypes = {
    email: PropTypes.string,
    comment: PropTypes.string
}
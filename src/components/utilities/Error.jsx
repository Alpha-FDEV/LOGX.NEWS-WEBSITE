import PropTypes from "prop-types";

Error.propTypes = {
  err: PropTypes.shape({
    message: PropTypes.string.isRequired, // Ensure `message` is a string and is required
  }), // Ensure `err` object itself is required
};

function Error({ error }) {
  return (
    <div className="flex-col items-center justify-center mt-10">
      <p className="text-xl text-orange-500 ">{error}</p>
    </div>
  );
}

export default Error;

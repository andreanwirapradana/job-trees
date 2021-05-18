module.exports = (code, message) => {
    let error;
    if (typeof message === 'string') {
        error = new Error(message);
    } else {
        error = new Error();
        error.body = message;
    }
    error.statusCode = code;
    return error;
};
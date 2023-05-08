/* 
    Higher-order funtion to handle async errors.
    Returns an Express handler or middleware function, which is eventually called by Express in place of the delegate function.
*/
function asyncErrorBoundary(delegate, defaultStatus) { // delegate is an async/await handler or middleware function
    return (req, res, next) => {
        Promise.resolve() // the value returned is guaranteed to have a catch() method, even if delegate isn't an async function
            .then(() => delegate(req, res, next))
            .catch((error = {}) => { // defaults to {} if that error is undefined, which will make sure that the destructuring in the next line doesn't fail
                const { status = defaultStatus, message = error } = error // destructed error object; by defaulting message to error, error can be a string or an error object
                next({
                    status,
                    message,
                })
            })
    }
}

module.exports = asyncErrorBoundary
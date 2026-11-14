class ApiErrors extends Error {
    constructor(message = "Something went wrong in backend", statusCode, errors = [], stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.data = null;
        this.errors = errors;
        this.stack = stack;
        this.sucess = false;

        if(stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export {ApiErrors};
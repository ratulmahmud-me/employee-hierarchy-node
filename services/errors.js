export class GeneralError extends Error {
    constructor(message) {
        super();
        this.message = message;
    }

    getCode() { return 400; }
}

export class BadRequest extends GeneralError {
    constructor(message) {
        super(message)
        this.name = 'Bad Request';
    }
    getCode() { return 400; }
}

export class Unauthorized extends GeneralError {
    constructor(message) {
        super(message);
        this.name = 'Unauthorized Request';
    }
    getCode() { return 401; }
}

export class UnprocessableEntity extends GeneralError {
    constructor(message) {
        super(message);
        this.name = 'Unprocessable Entity';
    }
    getCode() { return 422; }
}

export class NotFound extends GeneralError {
    constructor(message) {
        super(message);
        this.name = 'Not Found';
    }
    getCode() { return 404; }
}

export class AccessForbidden extends GeneralError {
    constructor(message) {
        super(message);
        this.name = 'Access Forbidden';
    }
    getCode() { return 403; }
}

export class DuplicateRecord extends GeneralError {
    constructor(message) {
        super(message);
        this.name = 'Duplicate Record';
    }
    getCode() { return 409; }
}
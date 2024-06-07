import { GeneralError } from "../../services/errors";

export const handleError = (err, req, res, next) => {
    let code = 500;
    if (err instanceof GeneralError) {
        code = err.getCode();
    }

    let correlationId = req.headers['x-correlation-id'];
    return res.status(code).json({
        correlationId,
        status: code,
        name: err.name,
        message: err.message
    });
}
import { UnprocessableEntity } from "../../services/errors";

export const checkValidationSchema = (schema, obj) => {
    const result = schema.validate(obj);
    const isValid = result.error == null
    console.log(isValid);
    if (isValid) {
        return true;
    }
    const { details } = result.error;
    const message = details.map((e) => e.message);
    const msg = message.join(',');
    throw new UnprocessableEntity(msg);
}

export const handleValidation = async (schema) => {
    console.log("OBJJJ", obj)
    return (req, res, next) => {
        if (checkValidationSchema(schema, req.body)) {
            return next();
        }
        const { details } = result.error;
        const message = details.map((e) => e.message);
        const msg = message.join(',');
        throw new UnprocessableEntity(msg);
    }
}
import jwt from "jsonwebtoken";
import { AccessForbidden } from "../../services/errors";

export const handleAuth = (req, res, next) => {
    try {
        let token = req.headers['authorization'];
        if (!token) {
            throw new AccessForbidden("Access Denied!");
        }
        // spliting the toke from Bearer 
        token = token.split(' ')[1];
        const verifiedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = verifiedToken;

        return next();
    } catch (error) {
        return next(error, req, res);
    }
}
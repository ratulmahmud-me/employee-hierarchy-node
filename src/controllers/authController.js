export const authProtection = (req, res, next) => {
    res.status(200).json({
        responseData: req.user,
        responseMessage: "This route is protected by JWT authorization!"
    });
}
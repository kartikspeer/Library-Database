import jwt from "jsonwebtoken"

function authenticateToken(req,res,next){
    try {
        const token = req.headers["authorization"].split(" ")[1];
        jwt.verify(token, "secretKey", (err, decode) => {
          if (err) {
            return res.status(401).send({
              success: false,
              message: "Auth Failed",
            });
          } else {
            req.body.userId = decode.userId;
            next();
          }
        });
    } catch (error) {
        return res.status(401).send({
            success: false,
            error,
            message: "Auth Failedd",
        });
    }
};

export default authenticateToken;
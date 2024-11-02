import jwt from 'jsonwebtoken';

const userVerifyMidlle = (req, res, next) => {
    try {
        const token = req.header('authorization')?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, process.env.J_W_P_Token);

        if (decoded) {
            req.user = decoded;
            next();
        } else {
            res.status(401).json({ message: "Token is invalid" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default userVerifyMidlle;

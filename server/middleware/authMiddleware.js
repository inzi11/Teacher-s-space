import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    console.log(req.headers.authorization);
    // this is send inside req send by the user which is like "Beared <Token>"
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if (!authHeader || !authHeader.startsWith("Bearer "))
        return res.status(401).message({ message: "No Token privided" });

    const token = authHeader.split(" ")[1]; //returns ["bearer" , <token>] -> we need toaken so index 1

    try {
        
        // the teacher that is performing action -> decoding the payload ({name, email})
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.teacher = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Invalid or expired token" });
    }


}
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ 
            success: false,
            message: 'Access denied. No token provided' 
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log('Token verified for user:', decoded.username);
        next();
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return res.status(403).json({ 
            success: false,
            message: 'Invalid token' 
        });
    }
};

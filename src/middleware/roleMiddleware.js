export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        // Check if user is authenticated first
        if (!req.user) {
            return res.status(401).json({ 
                success: false,
                message: 'Unauthorized: Authentication required' 
            });
        }

        // Check if user has required role
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ 
                success: false,
                message: `Forbidden: Access denied. Required roles: [${allowedRoles.join(', ')}]` 
            });
        }

        console.log(`Access granted: User ${req.user.username} with role '${req.user.role}' accessed protected route`);
        next();
    };
};

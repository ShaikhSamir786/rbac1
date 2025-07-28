import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { authorizeRoles } from '../middleware/roleMiddleware.js';

const router = express.Router();

// @route   GET /api/users/admin
// @desc    Admin only route
// @access  Private (Admin only)
router.get('/admin', verifyToken, authorizeRoles('admin'), (req, res) => {
    res.json({ 
        success: true,
        message: 'Admin route accessed successfully',
        user: {
            username: req.user.username,
            role: req.user.role
        }
    });
});

// @route   GET /api/users/manager
// @desc    Manager and Admin route
// @access  Private (Manager, Admin)
router.get('/manager', verifyToken, authorizeRoles('manager', 'admin'), (req, res) => {
    res.json({ 
        success: true,
        message: 'Manager route accessed successfully',
        user: {
            username: req.user.username,
            role: req.user.role
        }
    });
});

// @route   GET /api/users/dashboard
// @desc    General user dashboard
// @access  Private (All authenticated users)
router.get('/dashboard', verifyToken, authorizeRoles('user', 'admin', 'manager'), (req, res) => {
    res.json({ 
        success: true,
        message: 'User dashboard accessed successfully',
        user: {
            username: req.user.username,
            role: req.user.role
        }
    });
});

// @route   GET /api/users/profile
// @desc    Get user profile
// @access  Private
router.get('/profile', verifyToken, (req, res) => {
    res.json({
        success: true,
        message: 'Profile retrieved successfully',
        user: {
            id: req.user.userId,
            username: req.user.username,
            role: req.user.role
        }
    });
});

export default router;

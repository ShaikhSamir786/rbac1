import express from 'express';

import dotenv from 'dotenv';
import connectDB from './config/database.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
// app.use(helmet());
// app.use(cors());

// Logging middleware
// app.use(morgan('combined'));

// Body parsing middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Health check route
// app.get('/health', (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: 'Server is running successfully',
//         timestamp: new Date().toISOString()
//     });
// });

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// 404 handler for unmatched routes
app.all('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`
    });
});

// Global error handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({
//         success: false,
//         message: 'Something went wrong!',
//         error: process.env.NODE_ENV === 'production' ? {} : err.message
//     });
// });

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
   
});

export default app;

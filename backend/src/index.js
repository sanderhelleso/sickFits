const cookieParser = require('cookie-parser');
require('dotenv').config({ path: 'variables.env' });
const createServer =  require('./createServer');
const db = require('./db');
const jwt = require('jsonwebtoken');

const server = createServer();
server.express.use(cookieParser());

// decode JWT to get user ID on each request
server.express.use((req, res, next) => {
    const { token } = req.cookies;
    
    // set token
    if (token) {
        const { userID } = jwt.verify(token, process.env.APP_SECRET);
        req.userID = userID;
    }

    // continue
    next();
});

// start server
server.start({
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    },
}, 
details => {
    console.log(`Server is now running on port http://localhost:${details.port}`);
});

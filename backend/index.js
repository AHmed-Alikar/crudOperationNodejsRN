const express = require("express");
const app = express();
//const cors = require("cors");
const db = require('./models')
const cors = require('cors');

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Routes
const postRouter = require('./routes/Posts')
app.use("/posts", postRouter);

const commentRouter = require('./routes/Comments');
app.use("/comments",commentRouter);

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log("Server running...");
    })
})
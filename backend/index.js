const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const socket = require("socket.io");
require('dotenv').config();
const port = process.env.PORT || 8080;
const cors = require('cors');
const app = express()
const bookRouter = require('./api/routers/book');
const categoryRouter = require('./api/routers/category');
const publisherRouter = require('./api/routers/publisher');
const authorRouter = require('./api/routers/author');
const userRouter = require('./api/routers/user');
const cartRouter = require('./api/routers/cart');
const adminRouter = require('./api/routers/admin');
const billRouter = require('./api/routers/bill');
const commentRouter = require('./api/routers/comment');
const messageRoutes = require('./api/routers/message');
// Connect to MongoDB:
mongoose.Promise = global.Promise;
mongoose.connect(process.env.URL_MONGODB).then(
  ()=> {
    console.log("connect DB sucessfully");
  }).catch((error)=> {
    console.log('Error connecting to database');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors())
bookRouter(app)
categoryRouter(app)
publisherRouter(app)
authorRouter(app)
userRouter(app)
cartRouter(app)
adminRouter(app)
billRouter(app)
commentRouter(app)
app.get('/', (req, res) => {res.send('welcome to bookshop')})

const server=app.listen(port, () => {
  console.log('Web server is listening on port : '+port)
})
// app.listen(port, () => {
//   console.log('Web server is listening on port : '+port)
// })
const io = socket(server, {
  cors: {
  
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});

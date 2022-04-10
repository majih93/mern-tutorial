// entry point to server

const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");

// 환경변수 활용해서 PORT 값 설정, 안될 경우 대비해서 or 5000
const port = process.env.PORT;

// initialize express
const app = express();

// req.body를 사용하기 위해서는 middleware 몇 가지가 필요함
// 그 미들웨어 세팅하는 코드
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

// error handling middleware using code
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

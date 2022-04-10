// 미들웨어: functions that execute during the req~res cycle
// 이 미들웨어는, express의 에러 handler가 default로 text/html을 반환하는데 이를 변경하기 위함
// overwrite the default express error handler
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};

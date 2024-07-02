const ApiResponse = (
  message,
  data = null,
  statusCode = 200,
  totalRecord = 0
) => {
  return {
    message,
    data,
    statusCode,
    totalRecord,
  };
};

module.exports = ApiResponse;

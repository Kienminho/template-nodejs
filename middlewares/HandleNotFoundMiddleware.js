const { StatusCodes } = require("http-status-codes");
const ApiError = require("../controllers/error/ApiError");
const ApiResponse = require("../controllers/response/ApiResponse");

const HandleNotFound = (req, res) => {
  const { method, path } = req;
  throw new ApiError(
    ApiResponse(
      null,
      0,
      StatusCodes.NOT_FOUND,
      `${method} ${path} endpoint Not Found!`
    )
  );
};
module.exports = HandleNotFound;

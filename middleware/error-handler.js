const errorHandler = async (err, re, res, next) => {
  console.log(err);
  return res
    .status(500)
    .send({ msg: `Something went wrong, Please try again` });
};

module.exports = errorHandler;

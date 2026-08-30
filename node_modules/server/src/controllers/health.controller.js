const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: "MarketHub API is healthy",
  });
};

module.exports = {
  getHealth,
};

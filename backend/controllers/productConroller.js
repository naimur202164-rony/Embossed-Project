exports.getAllProducts = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "It is working fine",
  });
};

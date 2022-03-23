exports.publicAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.authenticatedAccess = (req, res) => {
  res.status(200).send("User Content.");
};


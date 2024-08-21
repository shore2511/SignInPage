//Bussiness logic are written here

// import the model
const User = require("../models/User");

// create a new Form item

exports.getEmail = async (req, res) => {
  try {
    //extract Form items basis on email
    const email = req.params.email;
    const user = await User.findOne({ email: email });

    // data for given id not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with Given Id",
      });
    }

    // Data for given Id Found
    res.status(200).json({
      success: true,
      data: user,
      message: `Form ${email} data successfully fetch`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

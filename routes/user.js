const express = require("express");
const router = express.Router();

const User = require("../models/User");

const { login, signup } = require("../Controllers/Auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");
const { getEmail } = require("../Controllers/getdata");

router.post("/login", login);
router.post("/signup", signup);

//testing protected routes for single middleware
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for TESTS",
  });
});

//Protected Route
router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Students",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected route for Admin",
  });
});

router.get("/getEmail/:email", getEmail);

// router.get("/getEmail/:email", auth, async (req, res) => {
//   try {
//     const email = req.user.email;
//     console.log("EMAIL:", email);
//     const user = await User.findByEmail(email);

//     res.status(200).json({
//       success: true,
//       user: user,
//       message: "Welcome to the email route",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message,
//       message: "Fatt gya code",
//     });
//   }
// });

module.exports = router;

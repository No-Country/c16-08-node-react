// const User = require ("../models/userModel.js");
// const bcrypt = require ("bcryptjs");
// const { createError } = require ("../utils/error.js");
// const jwt = require ("jsonwebtoken");


// exports.register = async (req, res, next) => {
//   try {
//     const { password, confirmPassword, ...userData } = req.body;

//     // Verifica si las contraseñas coinciden
//     if (password !== confirmPassword) {
//       return res.status(400).send('Passwords do not match');
//     }

//     const salt = bcrypt.genSaltSync(10);
//     const hash = bcrypt.hashSync(password, salt);

//     const newUser = new User({
//       ...userData,
//       password: hash,
//     });

//     await newUser.save();
//     res.status(200).send("User has been created.");
//   } catch (err) {
//     next(err);
//   }
// };


// exports.login = async (req, res, next) => {
//   try {
//     //console.log('Login request received.');

//     const user = await User.findOne({ email: req.body.email });
//     //console.log('User found:', user);

//     if (!user) {
//       console.log('User not found.');
//       return next(createError(404, "User not found!"));
//     }

//     const isPasswordCorrect = await bcrypt.compare(
//       req.body.password,
//       user.password
//     );
//     //console.log('Correct password:', isPasswordCorrect);

//     if (!isPasswordCorrect) {
//       console.log('Incorrect password.');
//       return next(createError(400, "Wrong password or email!"));
//     }

//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT
//     );
//     //console.log('Generated token:', token);

//     const { password, ...otherDetails } = user._doc;
//     res
//       .cookie("access_token", token, {
//         httpOnly: true,
//       })
//       .status(200)
//       .json({ details: { ...otherDetails }});
//   } catch (err) {
//     console.error('Error during login:', err);
//     next(err);
//   }
// };




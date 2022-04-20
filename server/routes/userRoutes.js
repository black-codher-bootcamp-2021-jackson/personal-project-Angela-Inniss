// Filename : user.js

const { check, validationResult } = require("express-validator/check"); // middleware
const bcrypt = require("bcryptjs"); // encryption tool for passwords translates it to a encrypted string
const jwt = require("jsonwebtoken"); // identifier for a user? :S

const User = require("../models/user");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

// check = middleware
const userRoutes = (app) => {
  app.post(
    "/api/signup",
    [
      check("username", "Please Enter a Valid Username").not().isEmpty(),
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
        min: 6,
      }),
    ],
    async (req, res) => {
      // console.log(req.body.name);
      // console.log(req.body.username);
      // console.log(req.body.email);
      // console.log(req.body.password);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { username, email, password, name } = req.body;
      // console.log(name);
      // console.log(username);
      // console.log(email);
      // console.log(password);

      try {
        let user = await User.findOne({
          email,
        });
        if (user) {
          return res.status(400).json({
            msg: "User Already Exists",
          });
        }
        // creating new instance of user
        user = new User({
          name,
          username,
          email,
          password,
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
          user: {
            id: user.id,
          },
        };

        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: 10000,
          },
       
          (err, token) => {
            if (err) throw err;
            res.cookie('token', token, { httpOnly: true }); // setting a cookie?
            res.status(200).json({
              token,
            });
           
      
          }
        );
      } catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
      }
    }
  );

  // app.get('/jwt', (req, res) => {
  //   const token = jsonwebtoken.sign({ user: 'johndoe' }, jwtSecret);
  //   res.cookie('token', token, { httpOnly: true });
  //   res.json({ token });
  // });

  app.post(
    "/api/login",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
        min: 6
      })
    ],
    async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }

      const { email, password } = req.body;
      try {
        let user = await User.findOne({
          email
        });
        if (!user)
          return res.status(400).json({
            message: "User Not Exist"
          });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !"
          });

        const payload = {
          user: {
            id: user.id
          }
        };

        jwt.sign(
          payload,
          "randomString",
          {
            expiresIn: 3600
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token
            });
          }
        );
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
      }
    }
  );

}
module.exports = userRoutes;
// closing bracket shortcut - cmd shift \

// sign up form on FE - post data to api/sign up server response will be a token 
// save the token response on the FE in local storage

// i.e if i wanted to authenticate a user in order to save a salon to their profile would have to 
// look up the token in local storage i.e localStorage.get("user")

// grab token and send token in the request with the token in the header? to be authenticated 
//to CRUD data


// forlogged in users - check for token on page load to see if is logged in - (useEffect hook);


//how should i handle expired tokens in localStorage 

// sign up will creat a user in db 
// sign in will hit me endpoint and check to see if there is a user token if there is login if not log out

const knex = require("./knex"); //the connection
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  create(user) {
    bcrypt
      .genSalt(10)
      .then((salt, err) => {
        if (err) {
          this.logger.logError(err, "registerUser");

          reject(err);
        }

        bcrypt.hash(user.password, salt).then((hash, err) => {
          if (err) {
            this.logger.logError(err, "registerUser");

            reject(err);
          }

          const newUser = {
            name: user.name,
            email: user.email,
            password: hash
          };
          return knex("user").insert(newUser, "*");
        });
      })
      .then(result => {
        res.status(201).json({ message: "user created", userId: result.id });
      })
      .catch(err => {
        this.logger.logError(err, "registerUser");
      });
  },

  login(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    knex("user")
      .where("email", email)
      .first()
      .then(user => {
        if (!user) {
          const error = new Error("A user with this email could not be found.");
          error.statusCode = 401;
          throw error;
        }
        loadedUser = user;
        console.log(loadedUser);
        return bcrypt.compare(password, user.password);
      })
      .then(isEqual => {
        if (!isEqual) {
          const error = new Error("Wrong password!");
          error.statusCode = 401;
          throw error;
        }
        const token = jwt.sign(
          {
            email: loadedUser.email,
            userId: loadedUser.id
          },
          "somesupersecretsecret",
          { expiresIn: "3h" }
        );
        res.status(200).json({ token: token, user: loadedUser });
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  },

  isLoged(req, res, next) {
    //get current user from token
    // check header or url parameters or post parameters for token
    var token = req.params.token || req.query.token;
    if (!token) {
      return res.status(401).json({ message: "Must pass token" });
    }
    // Check token that was passed by decoding token using secret
    jwt.verify(token, "somesupersecretsecret", function(err, user) {
      if (err) throw err;
      console.log(user.userId);
      //return user using the id from w/in JWTToken
      knex("user")
        .where("id", user.userId)
        .first()
        .then(response => {
          console.log(response);
          // user = utils.getCleanUser(user);
          //Note: you can renew token by creating new token(i.e.
          //refresh it)w/ new expiration time at this point, but I’m
          //passing the old token back.
          // var token = utils.generateToken(user);
          res.json({
            user: response,
            token: token
          });
        });
    });
  },

  updateUser(id, user) {
    bcrypt
      .genSalt(10)
      .then((salt, err) => {
        if (err) {
          this.logger.logError(err, "registerUser");

          reject(err);
        }

        console.log(salt);

        bcrypt.hash(user.password, salt).then((hash, err) => {
          if (err) {
            this.logger.logError(err, "registerUser");

            reject(err);
          }
          const newUser = {
            name: user.name,
            email: user.email,
            password: hash,
            image: user.image,
            description: user.description,
            country: user.country
          };
          return knex("user")
            .where("id", id)
            .update(newUser, "*");
        });
      })
      .catch(err => {
        this.logger.logError(err, "registerUser");
      });
  },

  getAll() {
    return knex("user");
  }
};

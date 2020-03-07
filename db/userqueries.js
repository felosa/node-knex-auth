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

        console.log(salt);

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
          console.log(newUser);
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
      .where("email", email).first()
      .then(user => {
        if (!user) {
          const error = new Error('A user with this email could not be found.');
          error.statusCode = 401;
          throw error;
        }
        loadedUser = user;
        console.log(loadedUser)
        return bcrypt.compare(password, user.password);
      })
      .then(isEqual => {
        if (!isEqual) {
          const error = new Error('Wrong password!');
          error.statusCode = 401;
          throw error;
        }
        const token = jwt.sign(
          {
            email: loadedUser.email,
            userId: loadedUser.id
          },
          'somesupersecretsecret',
          { expiresIn: '3h' }
        );
        console.log(loadedUser, "user")
        res.status(200).json({ token: token, userId: loadedUser.id});
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  },

  updateUser(id, user) {
    console.log(user, id);
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
          console.log(user);
          const newUser = {
            name: user.name,
            email: user.email,
            password: hash,
            image: user.image,
            description: user.description,
            country: user.country
          };
          console.log(newUser);
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

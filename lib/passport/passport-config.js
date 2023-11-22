const passport = require('passport');
const { jwtStrategy } = require('../../src/iam/strategy/jwt-strategy');

passport.use('jwt', jwtStrategy);

module.exports = passport;

const { PrismaClient } = require('@prisma/client');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');

const prisma = new PrismaClient();

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRETE,
};

const jwtStrategy = new JwtStrategy(options, async (jwtPayload, done) => {
	try {
		const user = await prisma.user.findUnique({
			where: {
				userId: jwtPayload.id,
			},
		});

		if (!user) {
			return done(null, false);
		}

		return done(null, user);
	} catch (error) {
		return done(error, false);
	}
});

module.exports = {
	jwtStrategy,
};

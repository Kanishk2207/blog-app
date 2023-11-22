const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const prisma = new PrismaClient();

const generateToken = (user) => {
	return jwt.sign({ id: user.userId }, process.env.JWT_SECRETE, {
		expiresIn: '1h',
	});
};

const creatUser = async (userEmail, password) => {
	const hash = await bcrypt.hash(password, 10);

	const user = await prisma.user.create({
		data: {
			userEmail: userEmail,
			userPassword: hash,
		},
	});

	const token = generateToken(user);
	return token;
};

const getUser = async (userEmail, password) => {
	const user = await prisma.user.findUnique({
		where: {
			userEmail: userEmail,
		},
		select: {
			userEmail: true,
			userId: true,
			userPassword: true,
		},
	});

	if (!user) {
		throw Error('User not found');
	}

	const validPassword = await bcrypt.compare(password, user.userPassword);

	if (!validPassword) {
		throw Error('Invalid password');
	}

	const token = generateToken(user);

	return token;
};

module.exports = {
	creatUser,
	getUser,
};

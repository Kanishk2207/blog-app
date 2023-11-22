const { creatUser, getUser } = require('./auth-service');

const signUp = async (req, res) => {
	const { userEmail, password } = req.body;

	try {
		const creatUserToken = await creatUser(userEmail, password);

		res.status(200).json({ token: creatUserToken });
	} catch (error) {
		throw console.error({ error: 'internl network error' }, error);
	}
};

const signIn = async (req, res) => {
	const { userEmail, password } = req.body;

	try {
		const getUserToken = await getUser(userEmail, password);

		res.status(200).json({ token: getUserToken });
	} catch (error) {
		throw console.error({ error: 'internl network error' }, error);
	}
};

module.exports = {
	signUp,
	signIn,
};

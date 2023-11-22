const { createPost, getAllPosts } = require('./post-service');

const createPostController = async (req, res) => {
	const userId = req.user.userId;

	const { title, image, content } = req.body;

	try {
		const post = await createPost(userId, title, image, content);
		// console.log(userId);
		res.status(200).json(post);
	} catch (error) {
		throw console.error({ error: 'internl network error' }, error);
	}
};

const viewPostController = async (req, res) => {
	const userId = req.user.userId;

	try {
		const posts = await getAllPosts(userId);

		res.status(200).json(posts);
	} catch (error) {
		throw console.error({ error: 'internl network error' }, error);
	}
};

module.exports = {
	createPostController,
	viewPostController,
};

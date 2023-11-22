const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const createPost = async (userId, postTitle, postImage, postContent) => {
	const post = await prisma.post.create({
		data: {
			postTitle: postTitle,
			postImage: postImage,
			postContent: postContent,
			authorId: userId,
		},
	});

	return post;
};

const getAllPosts = async (userId) => {
	console.log('till here');
	const allPosts = await prisma.post.findMany({
		where: {
			authorId: userId,
		},
	});

	if (!allPosts) {
		return { error: 'no post found' };
	}

	return allPosts;
};

module.exports = {
	createPost,
	getAllPosts,
};

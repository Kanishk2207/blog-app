const passport = require('../../lib/passport/passport-config');
const {
	createPostController,
	viewPostController,
} = require('./post-controller');

const router = require('express').Router();

router.post(
	'/create',
	passport.authenticate('jwt', { session: false }),
	createPostController,
);
router.post(
	'/view',
	passport.authenticate('jwt', { session: false }),
	viewPostController,
);

module.exports = router;

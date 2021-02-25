const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const PhotoRoute = require("./home")

router.use('/session', sessionRouter);

router.use('/users', usersRouter);
router.use('/explore', PhotoRoute)

module.exports = router;
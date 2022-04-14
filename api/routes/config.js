const express = require('express');
const middleware = require('@blocklet/sdk/lib/middlewares');

const Config = require('../states/config');

const router = express.Router();
const auth = middleware.auth({ roles: ['owner'] });
const user = middleware.user();

// TODO: add joi schema

router.post('/config', user, auth, async (req, res) => {
  // TODO: update config
});

router.get('/config', auth, async (req, res) => {
  const config = await Config.findOne();
  res.jsonp(config);
});

module.exports = router;

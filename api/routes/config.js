const express = require('express');
const middleware = require('@blocklet/sdk/lib/middlewares');

const Config = require('../states/config');

const router = express.Router();
const auth = middleware.auth({ roles: ['owner'] });
const user = middleware.user();

router.post('/config', user, auth, async (req, res) => {
  const config = await Config.findOne();
  if (config) {
    const newConfig = { ...config, ...req.body };
    await Config.update({ _id: config._id }, { $set: newConfig });
    return res.json(newConfig);
  }

  const newConfig = await Config.insert({ ...req.body, status: 'draft' });
  return res.json(newConfig);
});

router.get('/config', auth, async (req, res) => {
  const config = await Config.findOne();
  res.jsonp(config);
});

module.exports = router;

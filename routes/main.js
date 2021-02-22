var express = require('express');
var router = express.Router();
const mainController = require("../controllers/main")

/* GET learn page. */
router.get('/learn', mainController.learn)

/* GET teach page. */
router.get('/teach', mainController.teach)

/* GET config page */
router.get('/config', mainController.config)

/* GET delete page */
router.get('/delete', mainController.delete)

/* GET beginner page. */
router.get('/beginner', mainController.beginner)

/* GET advanced page. */
router.get('/advanced', mainController.advanced)

/* GET intensive page. */
router.get('/intensive', mainController.intensive)

module.exports = router;
const express = require('express');
const router = express.Router();

// domain settings
router.get('', (res, req) => {
	req.render('index');
});

router.get('/about', (res, req) => {
	req.render('about');
});

router.get('/contact', (res, req) => {
	req.render('contact');
});

module.exports = router;

const express = require('express');
const router = express.Router();

// domain settings
router.get('', (res, req) => {
	req.render('index');
});

router.get('/page', (res, req) => {
	req.render('page');
});

router.get('/page/ex1', (req, res) => {
	res.render('excise/ex1');
});

router.get('/page/ex2', (req, res) => {
	res.render('excise/ex2');
});

router.get('/page/ex3', (req, res) => {
	res.render('excise/ex3');
});

router.get('/page/ex4', (req, res) => {
	res.render('excise/ex4');
});

router.get('/page/ex5', (req, res) => {
	res.render('excise/ex5');
});

router.get('/page/ex6', (req, res) => {
	res.render('excise/ex6');
});

router.get('/page/ex7', (req, res) => {
	res.render('excise/ex7');
});

router.get('/page/ex8', (req, res) => {
	res.render('excise/ex8');
});

router.get('/page/ex9', (req, res) => {
	res.render('excise/ex9');
});

router.get('/page/ex9', (req, res) => {
	res.render('excise/ex9');
});

router.get('/page/ex10', (req, res) => {
	res.render('excise/ex10');
});

router.get('/contact', (res, req) => {
	req.render('contact');
});

router.get('*', (res, req) => {
	req.render('error');
});

module.exports = router;

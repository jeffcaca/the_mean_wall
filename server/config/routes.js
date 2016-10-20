var path = require('path')
var users = require('./../controllers/users.js')
var messages = require('./../controllers/messages.js')

module.exports = function(app){
	app.post('/login', function(req, res){
		users.login(req, res)
	})
	app.get('/checkUser', function(req, res){
		users.checkUser(req, res)
	})
	app.get('/logout', function(req, res){
		users.logout(req, res)
	})
	app.post('/newmessage/', function(req, res){
		messages.newMessage(req, res)
	})
	app.get('/getmessages', function(req, res){
		messages.getMessages(req, res)
	})
	app.post('/newcomment/:id', function(req, res){
		messages.newComment(req, res)
	})
}
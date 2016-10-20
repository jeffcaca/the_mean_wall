var mongoose = require('mongoose')
var Message = mongoose.model('Message')
var Comment = mongoose.model('Comment')
module.exports = (function(){
	return{
	newMessage: function (req, res){
		console.log(req.body.userid)
				  var message = new Message({
      			  name: req.body.name,
				  _user : req.body.userid,
				  description : req.body.description,
				  _comments : []
  				  });
				message.save(function(err, newmessage){
					if (err){
						console.log(err)
						res.json(err)
					}
					else{

					
						res.json(newmessage)
					}
				})
			},
			newComment: function( req, res){
				console.log("got to server controller")
				console.log(req.body)
				Message.findById(req.params.id, function(err, message){
					if(err){
						console.log(err)
					}
					else{
						var comment = new Comment({
							name: req.body.name,
							description: req.body.description,
							_user: req.body.userid,
           					_message: req.body.msgid,
						})
						message._comments.push(comment);
						comment.save(function (err){
							if (err){
								console.log(err)
							}
							else{
								message.save(function (err){
									if (err){
										console.log(err)
									}
									else{
										res.json({comment: req.body})
									}
								})
							}
						})
					}
				})
			},
			getMessages: function(req, res){
			Message.find({}).populate('_comments').exec(function(err, messages){
				if (err){
					console.log(err)
				}
				else{
					res.json(messages)
				}
			})
		}

	}	
})(); //immediately invoked
var mongoose = require('mongoose');
var Schema = mongoose.Schema
var MessageSchema = new Schema({
	description: {type: String},
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	name: String,
	date: { type: Date, default: Date.now }
})
mongoose.model('Message', MessageSchema)
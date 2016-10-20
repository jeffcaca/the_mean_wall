var mongoose = require('mongoose');
var Schema = mongoose.Schema
var UserSchema = new Schema({
	name: {type: String},
	_messages: [{type: Schema.Types.ObjectId, ref: 'Messages'}],
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comments'}]
})
mongoose.model('User', UserSchema)
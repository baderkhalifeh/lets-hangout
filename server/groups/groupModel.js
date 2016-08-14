var mongoose = require('mongoose');

 //creating Groups Model
var groupSchema = new mongoose.Schema({
	groupName: {type: String, required: true},
	groupAdmin: String, 
	users: [String],
	dashboard: [{type: mongoose.Schema.Types.ObjectId, ref: 'Dashboard'}]
});

var Group = mongoose.model('Group', groupSchema);
module.exports = Group;
const restuful = require('node-restful');
const mongoose = restuful.mongoose;

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, min: 6, max: 12, required: true },
});

module.exports = restuful.model('User', userSchema);

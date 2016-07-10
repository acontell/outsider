var mongoose = require('mongoose'),
    UserSchema = new mongoose.Schema({
        name: {type: String, required: true, lowercase: true, trim: true, index: {unique: true}},
        password: {type: String, required: true},
        created: {type: Date, required: true, default: Date.now}
    });

module.exports = mongoose.model('user', UserSchema);

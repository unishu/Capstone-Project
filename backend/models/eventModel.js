var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const eventSchema = new Schema({
    start: {type: Date},
    end: {type: Date},
    title: {type: String},
    userId: [{ type: Schema.Types.ObjectId, required: true, ref: 'users'}]
})

module.exports = mongoose.model('Event', eventSchema);
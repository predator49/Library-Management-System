// backend/models/Membership.js
const mongoose = require('mongoose');

const MembershipSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    type: { type: String, enum: ['6 months', '1 year', '2 years'], default: '6 months' },
});

module.exports = mongoose.model('Membership', MembershipSchema);

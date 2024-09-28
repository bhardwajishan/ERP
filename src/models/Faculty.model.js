// models/faculty.model.js
import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
    }
});

module.exports = mongoose.model('Faculty', facultySchema);

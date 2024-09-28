import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    enrollment_number: {
        type: String,
        required: true,
        unique: true,
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    year_of_study: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Student', studentSchema);

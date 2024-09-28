import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
    student_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    attendance: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);

import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    exam_date: {
        type: Date,
        required: true,
    },
    total_marks: {
        type: Number,
        required: true,
    },
    exam_type: {
        type: String,
        enum: ['Midterm', 'Final', 'Quiz'],
        required: true,
    }
});

module.exports = mongoose.model('Exam', examSchema);

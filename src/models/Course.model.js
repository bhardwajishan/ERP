import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    course_name: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    credits: {
        type: Number,
        required: true,
    },
    faculty_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Course', courseSchema);

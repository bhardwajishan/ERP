import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
    role_name: {
        type: String,
        required: true,
        enum: ['Student', 'Faculty', 'Admin', 'Staff'],
    },
    description: String
});

module.exports = mongoose.model('Role', roleSchema);

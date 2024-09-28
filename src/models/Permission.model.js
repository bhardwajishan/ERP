import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema({
    permission_name: {
        type: String,
        required: true
    },
    description: String,
});

module.exports = mongoose.model('Permission', permissionSchema);
import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    role_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role",
        required:true,
    }
});

// Password hashing middleware
userSchema.pre('save', async function (next) {
    if (!this.isModified('password_hash')) return next();
    this.password_hash = await bcrypt.hash(this.password_hash, 10);
    next();
});

module.exports = mongoose.model('User', userSchema);
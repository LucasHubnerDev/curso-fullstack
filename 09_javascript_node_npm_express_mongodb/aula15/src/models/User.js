import mongoose from 'mongoose'
// mongoose é um ODM

const { Schema, model } = mongoose

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Nome obrigatório'],
            trim: true,
            minlength: 2,
            maxlength: 100
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            index: true,
            match: [/^\S+@\S+\.\S+$/, 'Email inválido']
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
            select: false
        },

        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },

        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

export const User = model('User', userSchema)
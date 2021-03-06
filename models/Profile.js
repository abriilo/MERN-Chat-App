/**
 *    © 2022 Abraham Mitiku
 *    Open Source MERN Chat Application
 * 
 */
// -----------------------------------------------------------------
'use strict'
/**
 *  Module Dependencies
 */
const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    phone: Number,
    photo: String,
    phone: String,
    bio: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Profile', ProfileSchema)

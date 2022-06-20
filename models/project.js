const mongoose = require("mongoose");
const { Schema } = mongoose;

const projectSchema = new Schema({
    
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: [{
        type: String,
    }]
});

const Project = new mongoose.model('Project', projectSchema)
module.exports = Project;
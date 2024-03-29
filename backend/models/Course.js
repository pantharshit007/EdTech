const mongoose = require('mongoose');
const Schema = require('mongoose');

const courseSchema = new Schema({
    courseName: {
        type: String,
        trim: true,
        required: true,
    },
    courseDescription: {
        type: String,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    whatYouWillLearn: {
        type: String,
    },
    courseContent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
    }],
    ratingAndReviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RatingAndReview',
    }],
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    thumbnail: {
        type: String,
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
    },
    studentEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }]


});

module.exports = mongoose.model("Course", courseSchema);
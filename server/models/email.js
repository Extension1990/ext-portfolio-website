const mongoose = require('mongoose');

const emailSchema = mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    message:{
        type: String
    }
});

const Email = mongoose.model('Email', emailSchema);

// Save email to database
Email.register = function (email, callback) {
    email.save((err, result) => {
        if (err) {
            console.log(err);
            return callback('Could not send email.', null);
        } else {
            callback(null, 'Email sent successfully.');
            console.log(result);
        }
    });
};

module.exports = Email;

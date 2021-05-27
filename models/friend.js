const mongoose = require("mongoose");
//const { User } = require("./user");
const Joi = require("joi");

const friendSchema = new mongoose.Schema({
  firstName: { type: String, required: true, minlength: 2, maxlength: 50 },
  lastName: { type: String, required: true, minlength: 2, maxlength: 50 },
  email: { type: String, required: true, minlength: 2, maxlenght: 50 },
  pending: { type: Boolean, required: true, default: true },
});

const Friend = mongoose.model("Friend", friendSchema);

function validateFriend(friend) {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
    email: Joi.string().min(2).max(50).required().email(),
    pending: Joi.boolean(),
  });
  return schema.validate(friend);
}

exports.Friend = Friend;
exports.validateFriend = validateFriend;
exports.friendSchema = friendSchema;

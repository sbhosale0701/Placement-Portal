const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("mongoose-type-email");

let schema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
    email: {
      type: mongoose.SchemaTypes.Email,
      unique: true,
      lowercase: true,
      required: true,
      
        validate: {
        validator: function (v) {
          return v !== "" ? /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/gi.test(v) : true;
        },
        msg: "Email is invalid!",
      },

    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v !== "" ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi.test(v) : true;
        },
        msg: "Password is invalid!",
      },
    },
    resetToken: { type: String },
    resetTokenExpiry: { type: Date },
    type: {
      type: String,
      enum: ["recruiter", "applicant"],
      required: true,
    },
    domain: {
      type:String,
      required:true,
      enum:["Web Development","Cyber Security","Data Science","AI & ML","Cloud Computing","DevOps"],
     
    },
   contactNumber : {
      type: String,
      validate: {
        validator: function (v) {
          return v !== "" ? /\+\d{1,3}\d{10}/.test(v) : true;
        },
        msg: "Phone number is invalid!",
      },
      // required:true,
    },
    
    year:{
      type:String,
      enum:["FY-A","FY-B","SY-A","SY-B","TY-A","TY-B","BTech-A","BTech-B"],
      required:true,
    },
    CGPA:{
      type:Number,
      required:true,
    },
    address:{
    
      type:String,
      required:true,
    },
    resume: {
      type: String,
    },
    profile: {
      type: String,
    },
  },
  { collation: { locale: "en" } }
);

// Password hashing
schema.pre("save", function (next) {
  let user = this;

  // if the data is not modified
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

// Password verification upon login
schema.methods.login = function (password) {
  let user = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        reject(err);
      }
      if (result) {
        resolve();
      } else {
        reject();
      }
    });
  });
};

module.exports = mongoose.model("UserAuth", schema);

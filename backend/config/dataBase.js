const { default: mongoose } = require("mongoose");

const connectDb = () => {
  try {
    mongoose.connect(`mongodb://localhost:27017/Embossed`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("the data base is connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;

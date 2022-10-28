const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/user.js");

const app = express();

// DB Connection
mongoose.connect("mongodb+srv://admin:admin123@zuitt.v06ikbx.mongodb.net/Course-Booking-API?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology:true
});

// Prompts/Indicator message in the terminal once connection is open
mongoose.connection.once("open", () => console.log("Now connected to MongoDB Atlas"));

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/users", userRoutes);


app.listen(process.env.PORT || 4000, () => {
	console.log(`API is now online on port ${process.env.PORT || 4000}`);
})
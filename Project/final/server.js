const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const upload = multer({ dest: __dirname + "/public/images" });

mongoose
  .connect("mongodb+srv://Ayush:Ayush>@cluster0.jpibaqp.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const staffMemberSchema = new mongoose.Schema({
  name: String,
  title: String,
  description: String,
  img: String,
});

const StaffMember = mongoose.model("StaffMember", staffMemberSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/staff", async (req, res) => {
  const staffMembers = await getStaffMembers();
  res.send(staffMembers);
});

const getStaffMembers = async () => {
  return await StaffMember.find();
};

app.post("/api/staff", upload.single("img"), (req, res) => {
  const result = validateStaffMember(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const staffMember = new StaffMember({
    name: req.body.name,
    title: req.body.title,
    description: req.body.description,
  });

  if (req.file) {
    staffMember.img = "images/" + req.file.filename;
  }

  createStaffMember(staffMember, res);
});

const createStaffMember = async (staffMember, res) => {
  const result = await staffMember.save();
  res.send(staffMember);
};

app.put("/api/staff/:id", upload.single("img"), (req, res) => {
  const result = validateStaffMember(req.body);

  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  updateStaffMember(req, res);
});

const updateStaffMember = async (req, res) => {
  let fieldsToUpdate = {
    name: req.body.name,
    title: req.body.title,
    description: req.body.description,
  };

  if (req.file) {
    fieldsToUpdate.img = "images/" + req.file.filename;
  }

  const result = await StaffMember.updateOne({ _id: req.params.id }, fieldsToUpdate);
  const staffMember = await StaffMember.findById(req.params.id);
  res.send(staffMember);
};

app.delete("/api/staff/:id", async (req, res) => {
  removeStaffMember(res, req.params.id);
});

const removeStaffMember = async (res, id) => {
  const staffMember = await StaffMember.findByIdAndDelete(id);
  res.send(staffMember);
};

const validateStaffMember = (staffMember) => {
  const schema = Joi.object({
    _id: Joi.allow(""),
    name: Joi.string().min(3).required(),
    title: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
  });

  return schema.validate(staffMember);
};

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

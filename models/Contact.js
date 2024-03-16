import { Schema, model } from "mongoose";

import { handleSaveError, setUpdateSettings } from "./hooks.js";

const contactShema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

contactShema.post("save", handleSaveError);

contactShema.pre("findOneAndUpdate", setUpdateSettings);

contactShema.post("findOneAndUpdate", handleSaveError);

const Contact = model("contact", contactShema);

export default Contact;

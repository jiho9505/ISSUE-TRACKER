import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const labelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: 1,
    },
    description: {
      type: String,
    },
    bgColor: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Label = model('Label', labelSchema);

export { Label };

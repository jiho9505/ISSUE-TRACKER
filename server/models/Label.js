import { Schema, model } from 'mongoose';

const labelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: 1,
    },
    content: {
      type: String,
    },
    bgColor: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Label = model('Label', labelSchema);

export { Label };

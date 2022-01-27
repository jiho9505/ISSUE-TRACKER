import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const mileStoneSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: 1,
    },
    content: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    deadline: {
      type: Date,
    },
  },
  { timestamps: true }
);

const MileStone = model('MileStone', mileStoneSchema);

export { MileStone };

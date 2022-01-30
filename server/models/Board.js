import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const boardSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      default: [],
    },
    isOpen: {
      type: Boolean,
      default: true,
    },
    closeTime: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Board = model('Board', boardSchema);

export { Board };

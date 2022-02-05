import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const issueSchema = new Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
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

const Issue = model('Issue', issueSchema);

export { Issue };

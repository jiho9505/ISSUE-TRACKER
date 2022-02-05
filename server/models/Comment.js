import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const commentSchema = new Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    issueId: {
      type: Schema.Types.ObjectId,
      ref: 'Issue',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const Comment = model('Comment', commentSchema);

export { Comment };

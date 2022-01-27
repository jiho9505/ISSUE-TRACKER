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
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = model('Comment', commentSchema);

export { Comment };

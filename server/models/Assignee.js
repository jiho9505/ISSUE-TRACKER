import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const assigneeSchema = new Schema(
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
  },
  { timestamps: true }
);

const Assignee = model('Assignee', assigneeSchema);

export { Assignee };

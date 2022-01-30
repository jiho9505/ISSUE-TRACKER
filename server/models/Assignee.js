import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const assigneeSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
      required: true,
    },
  },
  { timestamps: true }
);

const Assignee = model('Assignee', assigneeSchema);

export { Assignee };

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
    issueId: {
      type: Schema.Types.ObjectId,
      ref: 'Issue',
      required: true,
    },
  },
  { timestamps: true }
);

const Assignee = model('Assignee', assigneeSchema);

export { Assignee };

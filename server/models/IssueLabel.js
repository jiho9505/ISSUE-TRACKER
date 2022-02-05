import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const issueLabelSchema = new Schema(
  {
    labelId: {
      type: Schema.Types.ObjectId,
      ref: 'Label',
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

const IssueLabel = model('IssueLabel', issueLabelSchema);

export { IssueLabel };

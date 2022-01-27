import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const IssueFliterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: 1,
    },
    form: {
      type: String,
      required: true,
      unique: 1,
    },
  },
  { timestamps: true }
);

const issueFliter = model('IssueFliter', IssueFliterSchema);

export { issueFliter };

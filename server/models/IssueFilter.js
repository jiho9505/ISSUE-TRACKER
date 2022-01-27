import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const model = mongoose.model;

const IssueFilterSchema = new Schema(
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

const IssueFilter = model('IssueFilter', IssueFilterSchema);

export { IssueFilter };

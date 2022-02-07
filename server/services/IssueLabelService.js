import { IssueLabel } from '../models/IssueLabel.js';

const getIssueLabels = async (issueId) => {
  const issueLabels = await IssueLabel.find({ issueId }).populate('labelId');

  const issueLabelResult = issueLabels.map((issueLabel) => ({
    _id: issueLabel._id,
    name: issueLabel.labelId.name,
    bgColor: issueLabel.labelId.bgColor,
    textColor: issueLabel.labelId.textColor,
  }));

  return issueLabelResult;
};

const createIssueLabel = async (body) => {
  const IssueLabels = new IssueLabel(body);
  await IssueLabels.save();
};

const deleteIssueLabel = async (_id) => {
  await IssueLabel.findOneAndDelete({ _id });
};

export const IssueLabelService = {
  getIssueLabels,
  createIssueLabel,
  deleteIssueLabel,
};

import { IssueLabel } from '../models/IssueLabel.js';
import { Label } from '../models/Label.js';

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

const getIssueLabelsInIssue = async (issueId) => {
  const labels = await Label.find({});
  const issueLabels = await IssueLabel.find({ issueId }).populate('labelId');
  const issueLabelResult = issueLabels.map((issueLabel) => {
    let choiceidx = 0;
    labels.forEach((label, idx) => {
      if (label.name === issueLabel.labelId.name) {
        choiceidx = idx;
        return;
      }
    });
    return {
      _id: issueLabel._id,
      name: issueLabel.labelId.name,
      bgColor: issueLabel.labelId.bgColor,
      textColor: issueLabel.labelId.textColor,
      idx: choiceidx,
    };
  });
  return issueLabelResult;
};

const createIssueLabel = async ({ data, issueId }) => {
  await IssueLabel.deleteMany({ issueId });
  await Promise.all(
    data.map(async (labelId) => {
      const issueLabel = new IssueLabel({ labelId, issueId });
      await issueLabel.save();
    })
  );
};

const deleteIssueLabel = async (_id) => {
  await IssueLabel.findOneAndDelete({ _id });
};

export const IssueLabelService = {
  getIssueLabels,
  createIssueLabel,
  deleteIssueLabel,
  getIssueLabelsInIssue,
};

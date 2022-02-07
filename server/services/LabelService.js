import { Label } from '../models/Label.js';
import { IssueLabel } from '../models/IssueLabel.js';
import { error } from '../errors/index.js';

const LABEL_MAX_LENGTH = 20;

const getLabels = async () => {
  const result = await Label.find({});
  return result;
};

const getLength = async () => {
  const result = await Label.find({});
  return result.length;
};

const createLabel = async (data) => {
  const labels = await Label.find({});
  if (labels.length >= LABEL_MAX_LENGTH) throw new Error(error.LABEL_LIMIT_ERROR);
  const labelInfo = await Label.findOne({ name: data.name });
  if (labelInfo) throw new Error(error.CREATE_LABEL_ERROR);
  const label = new Label(data);
  await label.save();
};

const updateLabel = async (_id, data) => {
  await Label.findOneAndUpdate({ _id }, data);
};

const deleteLabel = async (_id) => {
  await Promise.all([Label.findOneAndDelete({ _id }), IssueLabel.deleteMany({ labelId: _id })]);
};

export const LabelService = { getLabels, getLength, createLabel, updateLabel, deleteLabel };

import { Label } from '../models/Label.js';
import { error } from '../errors/index.js';

const getLabels = async () => {
  const result = await Label.find({});
  return result;
};

const getLength = async () => {
  const result = await Label.find({});
  return result.length;
};

export const LabelService = { getLabels, getLength, createLabel, updateLabel, deleteLabel };

import { error } from '../errors/index.js';
import { LabelService } from './../services/LabelService.js';

const getLabels = async (req, res) => {
  try {
    const result = await LabelService.getLabels();

    return res.json({
      success: true,
      result,
    });
  } catch (e) {
    return res.json({ success: false, message: error.GET_LABEL_ERROR });
  }
};

const getLength = async (req, res) => {
  try {
    const result = await LabelService.getLength();

    return res.json({
      success: true,
      result,
    });
  } catch (e) {
    return res.json({ success: false, message: error.GET_LABEL_LENGTH_ERROR });
  }
};

const createLabel = async (req, res) => {
  try {
    const data = req.body;
    await LabelService.createLabel(data);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: e.toString() });
  }
};

const updateLabel = async (req, res) => {
  try {
    const labelId = req.query.id;
    const data = req.body;
    await LabelService.updateLabel(labelId, data);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.UPDATE_LABEL_ERROR });
  }
};

const deleteLabel = async (req, res) => {
  try {
    const labelId = req.query.id;
    await LabelService.deleteLabel(labelId);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.DELETE_LABEL_ERROR });
  }
};

export const LabelController = { getLabels, getLength, createLabel, updateLabel, deleteLabel };

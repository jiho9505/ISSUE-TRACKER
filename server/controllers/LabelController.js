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

export const LabelController = { getLabels, getLength, createLabel, updateLabel, deleteLabel };

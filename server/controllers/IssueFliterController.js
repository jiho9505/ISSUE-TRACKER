import { error } from '../errors/index.js';
import { IssueFliter } from './../services/IssueFliter.js';

const getFliters = async (req, res) => {
  try {
    const result = await IssueFliter.getFliters();

    return res.json({
      success: true,
      result,
    });
  } catch (e) {
    return res.json({ success: false, message: error.GET_ISSUE_FITLER_ERROR });
  }
};

export const IssueFliterController = { getFliters };

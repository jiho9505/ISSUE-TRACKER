import { error } from '../errors/index.js';
import { IssueFilterService } from '../services/IssueFilterService.js';

const getFilters = async (req, res) => {
  try {
    const result = await IssueFilterService.getFilters();
    return res.json({
      success: true,
      result,
    });
  } catch (e) {
    return res.json({ success: false, message: error.GET_ISSUE_FILTER_ERROR });
  }
};

const createFilter = async (req, res) => {
  try {
    const data = req.body;
    await IssueFilterService.createFilter(data);
    return res.json({
      success: true,
    });
  } catch (e) {
    return res.json({ success: false, message: error.CREATE_ISSUE_FILTER_ERROR });
  }
};

export const IssueFilterController = { getFilters, createFilter };

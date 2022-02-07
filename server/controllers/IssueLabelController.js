import { IssueLabelService } from './../services/IssueLabelService.js';
import { error } from '../errors/index.js';

const getIssueLabels = async (req, res) => {
  try {
    const { issueId } = req.query;
    const result = await IssueLabelService.getIssueLabels(issueId);
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_ISSUE_LABEL_ERROR });
  }
};

const createIssueLabel = async (req, res) => {
  try {
    const body = req.body;
    await IssueLabelService.createIssueLabel(body);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.CREATE_ISSUE_LABEL_ERROR });
  }
};

const deleteIssueLabel = async (req, res) => {
  try {
    const { id } = req.query;
    await IssueLabelService.deleteIssueLabel(id);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.DELETE_ISSUE_LABEL_ERROR });
  }
};

export const IssueLabelController = { getIssueLabels, deleteIssueLabel, createIssueLabel };

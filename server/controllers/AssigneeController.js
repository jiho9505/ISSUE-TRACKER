import { AssigneeService } from '../services/AssigneeService.js';
import { error } from '../errors/index.js';

const getAssignees = async (req, res) => {
  try {
    const { issueId } = req.query;
    const result = await AssigneeService.getAssignees(issueId);
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_ASSIGNEE_ERROR });
  }
};

const getIssueAssignees = async (req, res) => {
  try {
    const { issueId } = req.query;
    const result = await AssigneeService.getIssueAssignees(issueId);
    return res.json({ success: true, result });
  } catch (e) {
    return res.json({ success: false, message: error.GET_ASSIGNEE_ERROR });
  }
};

const createAssignee = async (req, res) => {
  try {
    const body = req.body;
    await AssigneeService.createAssignee(body);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.CREATE_ASSIGNEE_ERROR });
  }
};

const deleteAssignee = async (req, res) => {
  try {
    const { id } = req.query;
    await AssigneeService.deleteAssignee(id);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.DELETE_ASSIGNEE_ERROR });
  }
};

export const AssigneeController = {
  getAssignees,
  getIssueAssignees,
  deleteAssignee,
  createAssignee,
};

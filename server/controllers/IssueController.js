import { IssueService } from '../services/IssueService.js';
import { error } from '../errors/index.js';

const createIssue = async (req, res) => {
  try {
    const body = req.body;
    const writer = req._id;
    await IssueService.createIssue(body, writer);

    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.CREATE_ISSUE_ERROR });
  }
};

export const IssueController = {
  // getIssues,
  // getDetail,
  // createImage,
  createIssue,
  // updateIssue,
  // deleteIssue,
};

import { IssueService } from '../services/IssueService.js';
import { error } from '../errors/index.js';

const getIssues = async (req, res) => {
  try {
    const status = req.query.status;
    const filter = req.query.filter;
    const page = Number(req.query.page) - 1;
    const writer = req._id;
    const result = await IssueService.getIssues(status, filter, writer, page);
    return res.json({ success: true, result });
  } catch (e) {
    console.log(e);
    return res.json({ success: false, message: error.GET_ISSUE_ERROR });
  }
};

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

// const getDetail = async (req, res) => {
//   try {
//     const issueId = req.query.id;
//     const result = await IssueService.getDetail(issueId);

//     return res.json({ success: true, result });
//   } catch (e) {
//     return res.json({ success: false, message: error.GET_BOARD_ERROR });
//   }
// };

// const createImage = async (req, res) => {
//   const upload = await IssueService.createImage();
//   upload(req, res, (err) => {
//     if (err) {
//       return res.json({ success: false, message: error.CREATE_IMAGE_ERROR });
//     }
//     const file = res.req.file;
//     return res.json({ success: true, filePath: file.location });
//   });
// };

// const updateIssue = async (req, res) => {
//   try {
//     const issueId = req.query.id;
//     const body = {
//       _id: issueId,
//     };
//     const { title, description, images, chooseBoard } = req.body;
//     const content = {
//       title,
//       description,
//       images,
//       chooseBoard,
//     };

//     await IssueService.updateIssue(body, content);
//     return res.json({ success: true });
//   } catch (e) {
//     return res.json({ success: false, message: error.UPDATE_BOARD_ERROR });
//   }
// };

// const deleteIssue = async (req, res) => {
//   try {
//     const issueId = req.query.id;
//     await IssueService.deleteIssue(issueId);
//     return res.json({ success: true });
//   } catch (e) {
//     return res.json({ success: false, message: error.DELETE_BOARD_ERROR });
//   }
// };

export const IssueController = {
  getIssues,
  createIssue,
  // getDetail,
  // createImage,
  // updateIssue,
  // deleteIssue,
};

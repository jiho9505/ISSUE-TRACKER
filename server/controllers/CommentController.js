import { CommentService } from './../services/CommentService.js';
import { error } from '../errors/index.js';

const getComments = async (req, res) => {
  try {
    const { issueId } = req.query;
    const result = await CommentService.getComments(issueId);
    return res.json({ success: true, result, length: result.length });
  } catch (e) {
    return res.json({ success: false, message: error.GET_COMMENT_ERROR });
  }
};

const createComment = async (req, res) => {
  try {
    const body = req.body;
    await CommentService.createComment(body);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.CREATE_COMMENT_ERROR });
  }
};

const updateComment = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    await CommentService.getComments(id, body);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.UPDATE_COMMENT_ERROR });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { id } = req.query;
    await CommentService.deleteComment(id);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: error.DELETE_COMMENT_ERROR });
  }
};

export const CommentController = { getComments, updateComment, deleteComment, createComment };

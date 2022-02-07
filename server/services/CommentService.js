import { Comment } from '../models/Comment.js';
import { Issue } from '../models/Issue.js';

const getComments = async (issueId) => {
  const [issue, comments] = await Promise.all([
    Issue.findOne({ _id: issueId }).populate('writer'),
    Comment.find({ issueId }).populate('writer'),
  ]);

  const commentResult = comments.map((comment) => ({
    _id: comment._id,
    createdAt: comment.createdAt,
    writerName: comment.writer.name,
    content: comment.content,
    avatar: comment.writer.avatar,
    issuer: comment.writer.name === issue.writer.name,
  }));

  return commentResult;
};

const createComment = async (body) => {
  const comments = new Comment(body);
  await comments.save();
};

const updateComment = async (_id, body) => {
  await Comment.findOneAndUpdate({ _id }, body);
};

const deleteComment = async (_id) => {
  await Comment.findOneAndDelete({ _id });
};

export const CommentService = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};

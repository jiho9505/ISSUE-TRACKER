import { Assignee } from '../models/Assignee.js';

const getAssignees = async (issueId) => {
  const assignees = await Assignee.find({ issueId }).populate('userId');
  const assigneeResult = assignees.map((assignee) => ({
    _id: assignee._id,
    avatar: assignee.userId.avatar,
  }));
  return assigneeResult;
};

const createAssignee = async (body) => {
  const Assignees = new Assignee(body);
  await Assignees.save();
};

const deleteAssignee = async (_id) => {
  await Assignee.findOneAndDelete({ _id });
};

export const AssigneeService = {
  getAssignees,
  createAssignee,
  deleteAssignee,
};

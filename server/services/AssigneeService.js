import { Assignee } from '../models/Assignee.js';
import { User } from '../models/User.js';

const getAssignees = async (issueId) => {
  const assignees = await Assignee.find({ issueId }).populate('userId');
  const assigneeResult = assignees.map((assignee) => ({
    _id: assignee._id,
    avatar: assignee.userId.avatar,
  }));
  return assigneeResult;
};

const getIssueAssignees = async (issueId) => {
  const users = await User.find({});

  const assignees = await Assignee.find({ issueId }).populate('userId');
  const assigneeResult = assignees.map((assignee) => {
    let choiceidx = 0;
    users.forEach((user, idx) => {
      if (user.name === assignee.userId.name) {
        choiceidx = idx;
        return;
      }
    });
    return {
      _id: assignee._id,
      avatar: assignee.userId.avatar,
      idx: choiceidx,
    };
  });
  return assigneeResult;
};

const createAssignee = async ({ data, issueId }) => {
  await Assignee.deleteMany({ issueId });
  await Promise.all(
    data.map(async (userId) => {
      const assignee = new Assignee({ userId, issueId });
      await assignee.save();
    })
  );
};

const deleteAssignee = async (_id) => {
  await Assignee.findOneAndDelete({ _id });
};

export const AssigneeService = {
  getAssignees,
  createAssignee,
  deleteAssignee,
  getIssueAssignees,
};

import { IssueFliter } from '../models/IssueFliter.js';

const getFliters = async () => {
  const result = await IssueFliter.find({});
  return result;
};

export const IssueFliterService = { getFliters };

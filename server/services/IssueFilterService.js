import { IssueFilter } from '../models/IssueFilter.js';

const getFilters = async () => {
  const result = await IssueFilter.find({});
  return result;
};

const createFilter = async (data) => {
  const label = new IssueFilter(data);
  await label.save();
};

export const IssueFilterService = { getFilters, createFilter };

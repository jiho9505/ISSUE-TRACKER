import { atom } from 'recoil';

export const paramGetIssueAtom = atom({
  key: 'ISSUE_PARAM',
  default: { status: 'open', filter: -1, page: 1 },
});

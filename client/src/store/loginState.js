import { atom } from 'recoil';

export const isLoggedInAtom = atom({
  key: 'IS_LOGGED_IN',
  default: false,
});

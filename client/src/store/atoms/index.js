import { atom } from 'recoil';

export const toastAtom = atom({
  key: 'toast',
  default: { isActive: false, title: '', content: '', mode: 'fail' },
});

import { atom } from 'recoil';

export const toastAtom = atom({
  key: 'TOAST',
  default: { isActive: false, title: '', content: '', mode: 'fail' },
});

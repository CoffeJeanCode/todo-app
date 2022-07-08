import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const themeAtom = atom({
  key: "theme",
  default: "light",
  effects: [persistAtom],
});

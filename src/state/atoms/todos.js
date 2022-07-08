import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const todosAtom = atom({
  key: "todos",
  default: [],
  effects: [persistAtom],
});

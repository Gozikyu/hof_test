import { createGreeter } from "./createGreeter";

export const useHof = () => {
  const taroGreeter = createGreeter("taro");
  const taroHello = taroGreeter("hello");
};

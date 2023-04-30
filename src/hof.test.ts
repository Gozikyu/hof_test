import { createGreeter } from "./createGreeter";
import { useHof } from "./hof";

jest.mock("./createGreeter"); // createGreeter関数をモックする

test("引数の確認", () => {
  const mockGreeter = jest.fn(); // モック関数を定義
  (createGreeter as jest.Mock).mockReturnValue(mockGreeter); // モック関数を返すように設定

  useHof();
  expect(createGreeter).toHaveBeenCalledWith("taro"); // createGreeter関数が引数 "taro" で呼ばれたかどうかを確認する
  expect(mockGreeter).toHaveBeenCalledWith("hello"); // mockGreeter関数が引数 "hello" で呼ばれたかどうかを確認する
});

import IndexedDB from "../utils/indexDB";
let airbnbDB = new IndexedDB("airbnb");
// 真实接口
// function getTest() {
//   return http.httpRequestGet(url, params);
// }
// mock接口

export async function fetchElephant() {
  await airbnbDB.openStore("elephant", "id", ["nose", "ear"]);
  const res = await airbnbDB.getList("elephant").then((res) => {
    return { code: "000000", message: "操作成功", result: res, success: true };
  });
  return res;
}

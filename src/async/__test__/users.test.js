const { default: getUsers } = require("../users");

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const response =  getUsers();
   // await expect(response).resolves.toEqual({});
  });
});

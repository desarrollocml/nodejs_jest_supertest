import request from "supertest";
import app from "../src/app";

describe("GET /tasks", () => {
  test("should respond width a 200 status code", async () => {
    const response = await request(app).get("/tasks").send();
    console.log(response);
  });
});
//set NODE_OPTIONS= --experimental-vm-modules && npx jest
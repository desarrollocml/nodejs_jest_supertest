import request from "supertest";
import app from "../src/app";

//set NODE_OPTIONS= --experimental-vm-modules && npx jest
describe("GET /tasks", () => {
  test("should respond width a 200 status code", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond an array", async ()=>{
      const response = await request(app).get("/tasks").send();
      expect(response.body).toBeInstanceOf(Array)
  })

});


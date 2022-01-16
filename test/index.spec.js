import request from "supertest";
import app from "../src/app";

//set NODE_OPTIONS= --experimental-vm-modules && npx jest
describe("GET /tasks", () => {
  test("should respond width a 200 status code", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond an array", async () => {
    const response = await request(app).get("/tasks").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST /tasks", () => {
  test("should respond width a 404 status code", async () => {
    const response = await request(app).post("/tasks").send();
    expect(response.statusCode).toBe(200);
  });

  test("should have a Content-Type: application/json head", async () => {
    const response = await request(app).post("/tasks").send();
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });

  /* test("shoud respond width an task ID", async () => {
    const response = await request(app).post("/tasks2").send();
    expect(response.body.id).toBeDefined();
  }); */
  test("shoud respond width an task ID", async () => {
    const response = await request(app).post("/tasks").send(
        {title: "some title",
        description: "some description",}
    );
    expect(response.body.id).toBeDefined();
  });

  /*   describe("given a title and description", () => {
        const newTask = {
      title: "some title",
      description: "some description",
    };
  }); */

});

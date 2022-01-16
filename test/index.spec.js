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
  describe("given a title and description", () => {
    const newTask = {
      title: "some title",
      description: "some description",
    };

    test("should respond width a 404 status code", async () => {
      const response = await request(app).post("/tasks").send(newTask);
      expect(response.statusCode).toBe(200);
    });

    test("should have a Content-Type: application/json head", async () => {
      const response = await request(app).post("/tasks").send(newTask);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    /* test("shoud respond width an task ID", async () => {
        const response = await request(app).post("/tasks2").send();
        expect(response.body.id).toBeDefined();
      }); */

    test("shoud respond width an task ID", async () => {
      const response = await request(app).post("/tasks").send(newTask);
      expect(response.body.id).toBeDefined();
    });
  });

  describe("when the title and description is missing", () => {
    test("should respond width a 400 status code", async () => {
      const fields = [
        { title: "some title" },
        { description: "some description" },
      ];
      for (const body of fields) {
        const responde = await request(app).post("/tasks").send(body);
        expect(response.statusCode).toBe(400);
      }
    });
  });
  
});

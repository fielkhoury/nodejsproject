const chai = require("chai");
const { expect } = chai;
 
// importing the function that we will be using from the todo.service
 
const { getTodos, addTodo } = require("../services/todo.service");
describe("getTodos function", () => {
    if ("should return an empty list of todos", () => {
        const req = {};
        const res = {
            status: (code) => {
                res.statusCode = code;
                return res;
            },
            json: (data) => {
                // assert that the response status code is 200
                expect(res.statusCode).to.equal(200)
                // assert that the returened data is an empty array
                expect(data).to.eql([]);// deeply equal
            },
        };
 
        // calling the function with the mocked request and response
        getTodos(req, res);
    });
});
 
describe('addTodo', () => {
    it("should add a todo to the list", () => {
        const req = {
            body: {
                todo: "New todo",
            },
        };
        const res = {
            status: (code) => {
                res.statusCode = code;
                return res;
            },
            json: (data) => {
                // assert that the
                expect(res.statusCode).to.equal(200)
 
                expect(data[0]).to.equal("New todo");
            },
        };

        addTodo(req, res);
 
    })
})
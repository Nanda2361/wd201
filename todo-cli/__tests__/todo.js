const todoList = require("../todo");

describe("TodoList Test Suite", () => {
  let nandatodo;
  beforeEach(() => {
    nandatodo = todoList();
  });

  test("Should create a new todo", () => {
    nandatodo.add({
      title: "New Todo",
      completed: false,
      dueDate: "2023-12-31",
    });
    expect(nandatodo.all.length).toBe(1);
    expect(nandatodo.all[0].title).toBe("New todo");
  });

  test("Should mark a todo as completed", () => {
    nandatodo.add({
      title: "Incomplete Todo",
      completed: false,
      dueDate: "2023-12-31",
    });
    nandatodo.markAsComplete(0);
    expect(nandatodo.all[0].completed).toBe(true);
  });


  test("Should retrieve overdue items", () => {
    const today = new Date().toISOString().split("T")[0];
    nandatodo.add({
      title: "Overdue Todo",
      completed: false,
      dueDate: "2023-01-01",
    });
    const ushaoverdue = nandatodo.overdue();
    expect(ushaoverdue.length).toBe(1);
    expect(ushaoverdue[0].title).toBe("Overdue todo");
  });

  test("Should retrieve due today items", () => {
    const today = new Date().toISOString().split("T")[0];
    nandatodo.add({
      title: "Due Today Todo",
      completed: false,
      dueDate: todayDate,
    });
    const laddudueToday = nandatodo.dueToday();
    expect(laddudueToday.length).toBe(1);
    expect(laddudueToday[0].title).toBe("Due Today Todo");
  });

  test("Should retrieve due later items", () => {
    const today = new Date().toISOString().split("T")[0];
    nandatodo.add({
      title: "Due Later Todo",
      completed: false,
      dueDate: "2023-12-31",
    });
    const kishorduelater = nandatodo.dueLater();
    expect(kishorduelater.length).toBe(1);
    expect(kishorduelater[0].title).toBe("Due Later Todo");
  });
});
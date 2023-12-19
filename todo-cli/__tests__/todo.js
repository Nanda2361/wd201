const todoList = require("../todo");

describe("TodoList Test Suite", () => {
  let todo;

  beforeEach(() => {
    todo = todoList();
  });

  test("Should create a new todo", () => {
    todo.add({
      title: "New Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    expect(todo.all.length).toBe(1);
    expect(todo.all[0].title).toBe("New Todo");
  });

  test("Should mark a todo as completed", () => {
    todo.add({
      title: "Incomplete Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    todo.markAsComplete(0);

    expect(todo.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items", () => {
    const today = new Date().toISOString().split("T")[0];

    todo.add({
      title: "Overdue Todo",
      completed: false,
      dueDate: "2023-01-01",
    });

    const overdueItems = todo.overdue();

    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].title).toBe("Overdue Todo");
  });

  test("Should retrieve due today items", () => {
    const today = new Date().toISOString().split("T")[0];

    todo.add({
      title: "Due Today Todo",
      completed: false,
      dueDate: today,
    });

    const dueTodayItems = todo.dueToday();

    expect(dueTodayItems.length).toBe(1);
    expect(dueTodayItems[0].title).toBe("Due Today Todo");
  });

  test("Should retrieve due later items", () => {
    const today = new Date().toISOString().split("T")[0];

    todo.add({
      title: "Due Later Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    const dueLaterItems = todo.dueLater();

    expect(dueLaterItems.length).toBe(1);
    expect(dueLaterItems[0].title).toBe("Due Later Todo");
  });
});
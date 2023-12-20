const todoList = require("../todo");

describe("TodoList Test Suite", () => {
  let todo;

  beforeEach(() => {
    todo = todoList();
  });

  test("We Should create a new todo", () => {
    todo.add({
      title: "New Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    expect(todo.all.length).toBe(1);
    expect(todo.all[0].title).toBe("New Todo");
  });

  test("Should mark a todo as completed after its completion", () => {
    todo.add({
      title: "Incomplete Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    todo.markAsComplete(0);

    expect(todo.all[0].completed).toBe(true);
  });

  test("Should retrieve overdue items after the time is over", () => {
    

    todo.add({
      title: "Overdue Todo",
      completed: false,
      dueDate: "2023-01-01",
    });

    const ThingsallOverDue = todo.overdue();

    expect(ThingsallOverDue.length).toBe(1);
    expect(ThingsallOverDue[0].title).toBe("Overdue Todo");
  });

  test("Should retrieve due today items which are mentioned", () => {
    const todayDate = new Date().toISOString().split("T")[0];

    todo.add({
      title: "Due Today Todo",
      completed: false,
      dueDate: todayDate,
    });

    const ThingstodayDue = todo.dueToday();

    expect(ThingstodayDue.length).toBe(1);
    expect(ThingstodayDue[0].title).toBe("Due Today Todo");
  });

  test("Should retrieve due later items", () => {
    

    todo.add({
      title: "Due Later Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    const ThingsdueLater = todo.dueLater();

    expect(ThingsdueLater.length).toBe(1);
    expect(ThingsdueLater[0].title).toBe("Due Later Todo");
  });
});

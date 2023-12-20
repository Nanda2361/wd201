const todoList = require("../todo");

describe("TodoList Test Suite", () => {
  let todo;

  beforeEach(() => {
    todo = todoList();
  });

  // Test 1: Adding a todo
  test("Test to add a todo", () => {
    todo.add({
      title: "New Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    expect(todo.all.length).toBe(1);
    expect(todo.all[0].title).toBe("New Todo");
  });

  // Test 2: Marking a todo as complete
  test("Test to mark a todo as complete", () => {
    todo.add({
      title: "Incomplete Todo",
      completed: false,
      dueDate: "2023-12-31",
    });

    todo.markAsComplete(0);

    expect(todo.all[0].completed).toBe(true);
  });

  // Test 3: Retrieving overdue items
  test("Test to retrieve overdue items", () => {
    todo.add({
      title: "Overdue Todo",
      completed: false,
      dueDate: "2023-01-01",
    });

    const overdueItems = todo.overdue();

    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0].title).toBe("Overdue Todo");
  });

  // Test 4: Retrieving due today items
  test("Test to retrieve due today items", () => {
    const todayDate = new Date().toISOString().split("T")[0];

    todo.add({
      title: "Due Today Todo",
      completed: false,
      dueDate: todayDate,
    });

    const dueTodayItems = todo.dueToday();

    expect(dueTodayItems.length).toBe(1);
    expect(dueTodayItems[0].title).toBe("Due Today Todo");
  });

  // Test 5: Retrieving due later items
  test("Test to retrieve due later items", () => {
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

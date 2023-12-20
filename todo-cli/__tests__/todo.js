const todoList = require("../todo");

describe("TodoList Test Suite", () => {
  let nandatodo;
  beforeEach(() => {
    nandatodo = todoList();
  });

<<<<<<< HEAD
  test("Should create a new todo", () => {
    nandatodo.add({
=======
  test("We Should create a new todo", () => {
    todo.add({
>>>>>>> e1cbb680798bc1fae54363e6a6254658ba836924
      title: "New Todo",
      completed: false,
      dueDate: "2023-12-31",
    });
    expect(nandatodo.all.length).toBe(1);
    expect(nandatodo.all[0].title).toBe("New todo");
  });

<<<<<<< HEAD
  test("Should mark a todo as completed", () => {
    nandatodo.add({
=======
  test("Should mark a todo as completed after its completion", () => {
    todo.add({
>>>>>>> e1cbb680798bc1fae54363e6a6254658ba836924
      title: "Incomplete Todo",
      completed: false,
      dueDate: "2023-12-31",
    });
    nandatodo.markAsComplete(0);
    expect(nandatodo.all[0].completed).toBe(true);
  });

<<<<<<< HEAD
  test("Should retrieve overdue items", () => {
    const today = new Date().toISOString().split("T")[0];
    nandatodo.add({
=======
  test("Should retrieve overdue items after the time is over", () => {
    

    todo.add({
>>>>>>> e1cbb680798bc1fae54363e6a6254658ba836924
      title: "Overdue Todo",
      completed: false,
      dueDate: "2023-01-01",
    });
<<<<<<< HEAD
    const ushaoverdue = nandatodo.overdue();
    expect(ushaoverdue.length).toBe(1);
    expect(ushaoverdue[0].title).toBe("Overdue todo");
  });

  test("Should retrieve due today items", () => {
    const today = new Date().toISOString().split("T")[0];
    nandatodo.add({
=======

    const allOverDueThings = todo.overdue();

    expect(allOverDueThings.length).toBe(1);
    expect(allOverDueThings[0].title).toBe("Overdue Todo");
  });

  test("Should retrieve due today items which are mentioned", () => {
    const todayDate = new Date().toISOString().split("T")[0];

    todo.add({
>>>>>>> e1cbb680798bc1fae54363e6a6254658ba836924
      title: "Due Today Todo",
      completed: false,
      dueDate: todayDate,
    });
<<<<<<< HEAD
    const laddudueToday = nandatodo.dueToday();
    expect(laddudueToday.length).toBe(1);
    expect(laddudueToday[0].title).toBe("Due Today Todo");
  });

  test("Should retrieve due later items", () => {
    const today = new Date().toISOString().split("T")[0];
    nandatodo.add({
=======

    const todayDueThings = todo.dueToday();

    expect(todayDueThings.length).toBe(1);
    expect(todayDueThings[0].title).toBe("Due Today Todo");
  });

  test("Should retrieve due later items", () => {
    

    todo.add({
>>>>>>> e1cbb680798bc1fae54363e6a6254658ba836924
      title: "Due Later Todo",
      completed: false,
      dueDate: "2023-12-31",
    });
<<<<<<< HEAD
    const kishorduelater = nandatodo.dueLater();
    expect(kishorduelater.length).toBe(1);
    expect(kishorduelater[0].title).toBe("Due Later Todo");
  });
});
=======

    const dueLaterThings = todo.dueLater();

    expect(dueLaterThings.length).toBe(1);
    expect(dueLaterThings[0].title).toBe("Due Later Todo");
  });
});
>>>>>>> e1cbb680798bc1fae54363e6a6254658ba836924

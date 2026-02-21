import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";


// Test render
test("renders TodoList component", () => {

  render(<TodoList />);

  expect(
    screen.getByText("Todo List")
  ).toBeInTheDocument();

});


// Test initial todos
test("renders initial todos", () => {

  render(<TodoList />);

  expect(
    screen.getByText("Learn React")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Write Tests")
  ).toBeInTheDocument();

});


// Test adding todo
test("adds todo", () => {

  render(<TodoList />);

  fireEvent.change(
    screen.getByPlaceholderText("Add Todo"),
    { target: { value: "New Task" } }
  );

  fireEvent.click(
    screen.getByText("Add")
  );

  expect(
    screen.getByText("New Task")
  ).toBeInTheDocument();

});


// Test toggle
test("toggles todo", () => {

  render(<TodoList />);

  const todo =
    screen.getByText("Learn React");

  fireEvent.click(todo);

  expect(todo).toHaveStyle(
    "text-decoration: line-through"
  );

});


// Test delete
test("deletes todo", () => {

  render(<TodoList />);

  const deleteButtons =
    screen.getAllByText("Delete");

  fireEvent.click(deleteButtons[0]);

  expect(
    screen.queryByText("Learn React")
  ).not.toBeInTheDocument();

});
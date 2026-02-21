import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";


test("renders TodoList component", () => {

  render(<TodoList />);

  expect(
    screen.getByText("Todo List")
  ).toBeInTheDocument();

});


test("renders initial todos", () => {

  render(<TodoList />);

  expect(
    screen.getByText("Learn React")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Write Tests")
  ).toBeInTheDocument();

});


test("adds a todo", () => {

  render(<TodoList />);

  const input =
    screen.getByPlaceholderText("Add Todo");

  fireEvent.change(input, {
    target: { value: "New Todo" }
  });


  fireEvent.click(
    screen.getByText("Add")
  );


  expect(
    screen.getByText("New Todo")
  ).toBeInTheDocument();

});


test("toggles a todo", () => {

  render(<TodoList />);

  const todo =
    screen.getByText("Learn React");

  fireEvent.click(todo);

  expect(todo).toHaveStyle(
    "text-decoration: line-through"
  );

});


test("deletes a todo", () => {

  render(<TodoList />);

  const deleteButtons =
    screen.getAllByText("Delete");


  fireEvent.click(deleteButtons[0]);


  expect(
    screen.queryByText("Learn React")
  ).not.toBeInTheDocument();

});
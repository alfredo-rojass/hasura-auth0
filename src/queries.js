import gql from "graphql-tag";
export const getAllTodos = gql`
  {
    todo(where: {id: {_eq: 1}}) {
      id
      name
    }
  }
`;

export const getIncompleteTodos = gql`
  {
    profile {
      name
      age
    }
  }
`;

export const getCompleteTodos = gql`
  {
    todos(where: { todo_mark: { _eq: true } }) {
      todo_id
      todo_text
      todo_mark
      todo_user
    }
  }
`;

export const addTodo = gql`
  mutation($profile_name: String!, $profile_age: Integer!) {
    insert_profile(objects: [{ name: $profile_name, age: $profile_age }]) {
      affected_rows
    }
  }
`;

export const markTodo = gql`
  mutation($todo_id: Int!) {
    update_todos(
      where: { todo_id: { _eq: $todo_id } }

      _set: { todo_mark: true }
    ) {
      affected_rows
    }
  }
`;

export const deleteTodo = gql`
  mutation($todo_id: Int!) {
    delete_todos(where: { todo_id: { _eq: $todo_id } }) {
      affected_rows
    }
  }
`;

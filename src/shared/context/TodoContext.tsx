import React, { createContext, useReducer, useContext, ReactNode } from "react";

export interface Todo {
  title: string;
  checked: boolean;
}

interface TodoContextState {
  todoList: Todo[];
}

type TodoContextAction = { type: "CHANGE_LIST"; payload: { title: string } };

export const TodoContext = createContext<{
  state: TodoContextState;
  dispatch: React.Dispatch<TodoContextAction>;
}>({
  state: { todoList: [] },
  dispatch: () => undefined,
});

const todoReducer = (
  state: TodoContextState,
  action: TodoContextAction
): TodoContextState => {
  switch (action.type) {
    case "CHANGE_LIST":
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.title === action.payload.title) {
            return { ...todo, checked: !todo.checked };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, {
    todoList: [
      { title: "Sprint Meeting", checked: false },
      { title: "Eating", checked: false },
      { title: "Studying", checked: false },
      { title: "Solving algorithm", checked: false },
    ],
  });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// Create a custom hook to use the TodoContext
export const useTodoContext = () => {
  return useContext(TodoContext);
};

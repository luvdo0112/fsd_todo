import * as S from "./TodoListSection.styled";
import TodoCard from "../TodoCard";
import { useTodoContext } from "../../shared/context/TodoContext";

export function TodoListSection() {
  const { state } = useTodoContext();

  return (
    <S.Wrapper>
      {state.todoList.map(({ title, checked }) => (
        <TodoCard title={title} checked={checked} />
      ))}
    </S.Wrapper>
  );
}

import TodoCard from "@/entities/todo/ui/TodoCard";
import { useTodoContext } from "@/shared/context";
import * as S from "./TodoListSection.styled";

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

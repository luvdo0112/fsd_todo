import { getDate } from "../../shared/getDate";
import * as S from "./DateAndRemaiTaskSection.styled";

export function DateAndRemainTaskSection() {
  return (
    <S.Wrapper>
      <S.InfoSection>
        <S.Date>{getDate()}</S.Date>
        <S.TaskNum>3 tasks</S.TaskNum>
      </S.InfoSection>
    </S.Wrapper>
  );
}

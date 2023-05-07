import styled from 'styled-components';

export const Container = styled.div`
  max-width: 991px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.mainText};
`;

export const ButtonList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
`;

export const ButtonListItem = styled.li``;

export const Button = styled.button`
  width: 100px;
  padding: 8px 0;
  font-weight: 500;
  border: 1px solid #ccc;
  border-radius: 8px;
  user-select: none;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.shadowButton};
  }
`;

export const FeedbackList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 400px;
`;

export const FeedbackItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  background-color: #f0f0f0;
  outline: 4px solid #f0f0f0;
  box-shadow: inset 2px 2px 2px 0px rgba(0, 0, 0, 0.3),
    inset -2px -2px 2px 0px rgba(0, 0, 0, 0.3);
`;

export const FeedbackCount = styled.span`
  font-size: 42px;
  color: ${({ theme }) => theme.colors.secondText};
  user-select: none;
`;

export const FeedbackCountList = styled.ul`
  width: 100%;
  max-width: 400px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondText};
`;

export const FeedbackCountItem = styled.li`
  margin-bottom: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #f0f0f0;
`;

export const TextTotalCount = styled.p``;

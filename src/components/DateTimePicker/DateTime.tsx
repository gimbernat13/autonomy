import React from "react";
import styled from "styled-components";
interface Props {
  onChange: () => void;
  id: string;
  value: string;
  name: string;
}

const StyledPicker = styled.input`
  border-radius: 20px;
  width: 100%;
  position: relative;
  border: none;
  font-size: 28px;
  color-scheme: ${({ theme }) => theme.colorScheme};
  font-size: 26px;
  font-weight: 500;
  background-color: inherit;

  ::-webkit-datetime-edit {
    /* padding: 4px; */
  }
  ::-webkit-inner-spin-button {
    display: none;
  }
  ::-webkit-calendar-picker-indicator {
    color: white;
    fill: white;
    stroke: white;
    /* transform: scale(1.3); */
    cursor: pointer;
    /* margin-right: 18px; */
  }
`;
const Container = styled.div`
  width: 100%;
  /* padding: 20px; */
  cursor: pointer;
`;

export const DateTimePicker = ({ onChange, id, value, name }: Props) => {
  const today = new Date().toISOString();

  return (
    <Container>
      <StyledPicker
        type="datetime-local"
        id={id}
        onChange={onChange}
        name={name}
        min={today}
        max="2024-06-14T00:00"
      />
    </Container>
  );
};

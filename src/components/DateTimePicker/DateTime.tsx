import React from "react";
import styled from "styled-components";
interface Props {}

export const DateTimePicker = (props: Props) => {
  const StyledPicker = styled.input`
    border-radius: 20px;
    width: 100%;
    position: relative;
    border: none;
    font-size: 20px;
    background: ${({ theme }) => theme.inputBg};
    color-scheme: ${({ theme }) => theme.colorScheme};
    font-size: 18px;
    font-family: "Roboto Mono", monospace !important;
    font-weight: 500;

    ::-webkit-datetime-edit {
      padding: 16px;
    }
    ::-webkit-datetime-edit-fields-wrapper {
    }
    ::-webkit-datetime-edit-text {
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
      margin-right: 18px;
    }
  `;
  const Container = styled.div`
    width: 100%;
    /* padding: 20px; */
    cursor: pointer;
  `;

  const [dateValue, setDateValue] = React.useState("2018-06-12T19:30");
  const today = new Date().toISOString();
  console.log(today);
  return (
    <Container>
      <StyledPicker
        type="datetime-local"
        id="meeting-time"
        onChange={(e) => setDateValue(e.target.value)}
        name="meeting-time"
        value={dateValue}
        min={today}
        max="2024-06-14T00:00"
      />
    </Container>
  );
};

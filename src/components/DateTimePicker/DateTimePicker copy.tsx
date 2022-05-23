import React from "react";
import styled from "styled-components";
interface Props {}

export const DateTimePicker = (props: Props) => {
  const Button = styled.input`
    border-radius: 20px;
    padding: 1rem 0rem;
    border: 1px solid rgb(255, 255, 255);
    background-color: rgb(247, 248, 250);
    width: initial;
    max-width: 480px;
    width: 100%;
    position: relative;

    ::-webkit-datetime-edit {
      padding: 1em;
    }
    ::-webkit-datetime-edit-fields-wrapper {
      padding: 0 1rem;
      /* background: silver; */
    }
    ::-webkit-datetime-edit-text {
      color: red;
      padding: 0 0.3em;
    }
    ::-webkit-datetime-edit-month-field {
      color: blue;
    }
    ::-webkit-datetime-edit-day-field {
      color: green;
    }
    ::-webkit-datetime-edit-year-field {
      color: purple;
    }
    ::-webkit-inner-spin-button {
      display: none;
    }
    ::-webkit-calendar-picker-indicator {
      /* background: orange; */
      transform: scale(1.5);
      cursor: pointer;
      margin-right: 30px;
    }

    /* The GitHub button is a primary button
   * edit this to target it specifically! */
  `;
  const Container = styled.div`
    max-width: 480px;
    padding: 20px;
    cursor: pointer;
  `;

  return (
    <Container>
      <Button
        type="datetime-local"
        id="meeting-time"
        name="meeting-time"
        value="2018-06-12T19:30"
        min="2018-06-07T00:00"
        max="2018-06-14T00:00"
      />
    </Container>
  );
};

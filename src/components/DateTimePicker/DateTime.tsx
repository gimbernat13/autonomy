import React from "react";
import styled from "styled-components";
interface Props {}

export const DateTimePicker = (props: Props) => {
  const Button = styled.input`
    border-radius: 20px;
    background-color: rgb(247, 248, 250);
    width: initial;
    width: 100%;
    position: relative;
    border: 1px solid rgb(237, 238, 242);
    font-size: 20px;
    font-family: "Inter", sans-serif !important;
    color: rgb(86, 90, 105) !important;


    ::-webkit-datetime-edit {
      padding: 16px;
    }
    ::-webkit-datetime-edit-fields-wrapper {
      /* padding: 0 1rem; */
      /* background: silver; */
    }
    ::-webkit-datetime-edit-text {
      /* color: red; */
    }

    ::-webkit-inner-spin-button {
      display: none;
    }
    ::-webkit-calendar-picker-indicator {
      transform: scale(1.3);
      cursor: pointer;
      /* margin-right: 16px; */
    }

    /* The GitHub button is a primary button
   * edit this to target it specifically! */
  `;
  const Container = styled.div`
  width: 100%;
    /* padding: 20px; */
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

import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import styled from "styled-components";

export default function BasicDateTimePicker() {
  const [value, setValue] = React.useState<Date | null>(new Date());
  console.log(value);

  return (
    <>
      {/* <h1>{value} </h1> */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          className="border-ass"
          renderInput={(props) => (
            <TextField
              {...props}
              fullWidth
              className="border-ass"
              sx={{ boxShadow: 6, borderRadius: "20px" }}
              // inputProps={{
              //   placeholder: "Enter Date & Time",
              // }}
            />
          )}
          value={value}
          onChange={(newValue: any) => {
            // setValue(newValue);
          }}
        />
      </LocalizationProvider>
    </>
  );
}

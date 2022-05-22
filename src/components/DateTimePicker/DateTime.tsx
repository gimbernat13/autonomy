import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import styled from "styled-components";


export default function BasicDateTimePicker() {
  
  const [value, setValue] = React.useState<Date | null>(new Date());
  const TextFieldWrapper = styled(DateTimePicker)`
    div {
      border-radius: 50px;
    }
  `;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TextFieldWrapper
        className="border-ass"
        renderInput={(props) => (
          <TextField
            {...props}
            fullWidth
            className="border-ass"
            // inputProps={{
            //   placeholder: "Enter Date & Time",
            // }}
          />
        )}
        // label="DateTimePicker"
        value={value}
        onChange={(newValue:any) => {
          // setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}

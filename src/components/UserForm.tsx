import React, { useState } from "react";
import { Button, Stack, TextField, Box, Paper, Grid } from "@mui/material";

type UserFormProp = {
  name: string;
  password: string;
};
const defaultValue = {
  name: "",
  password: "",
};

export const UserForm = () => {
  const [formData, setForm] = useState<UserFormProp>(defaultValue);
  const [gender, setGender] = useState();

  const getValue = (event: any) => {
    if (formData.name === "") {
      alert("Fields are empty");
    } else {
      event.preventDefault(); // prevent form from reloading
      console.log(formData, gender);
    }
  };

  const setDefault = (event: any) => {
    formData.name = "";
    formData.password = "";
  };

  return (
    <Grid container justifyContent="center" sx={{ marginTop: 10 }}>
      <Grid item xs={4} sm={4}>
        <Paper
          elevation={6}
          sx={{
            background: "white",
            border: "20px",
            color: "balck",
            height: "250px",
            width: "250px",
            padding: "20px",
          }}
        >
          <Box>
            <form onSubmit={getValue}>
              <TextField
                type="text"
                margin="dense"
                label="name secondary"
                required
                variant="outlined"
                value={formData.name}
                onChange={(event: any) =>
                  setForm({ ...formData, name: event.target.value })
                }
              />
              <br />
              <TextField
                type="password"
                label="password"
                required
                margin="normal"
                variant="outlined"
                value={formData.password}
                onChange={(event: any) =>
                  setForm({ ...formData, password: event.target.value })
                }
              />
              <br />
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={(event: any) => setGender(event.target.value)}
              />
              Male
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={(event: any) => setGender(event.target.value)}
              />
              Female
              <br />
              {/* <input type="submit" value="Submit" /> */}
              <Stack direction="column" margin={4} display="block">
                <Button variant="contained" type="submit">
                  {"Submit"}
                </Button>

                <Button variant="contained" onClick={setDefault} color="error">
                  {"Cancle"}
                </Button>
              </Stack>
            </form>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

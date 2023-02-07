import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useHistory } from "react-router-dom";

import api from "../../api/axios";
import { AuthContext } from "../../contexts/AuthContext";

export default function UserDashboard() {
  const { currentUser } = useContext(AuthContext);

  const history = useHistory();

  const startQuiz = () => {
    api
      .post("/start_quiz")
      .then(({ data }) => {
        console.log("success");
        history.push(`/quiz/${data.quiz.id}`);
      })
      .catch(({ response }) => {
        // handle error here
        console.log("something went wrong", response);
      });
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Hello, {currentUser.first_name}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Click the button below to start the quiz
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button onClick={startQuiz} variant="contained">
            Start
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

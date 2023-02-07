import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import TextField from "@mui/material/TextField";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import UserNavBar from "../../components/UserNavBar";
import api from "../../api/axios";
import Footer from "../../components/Footer";
import Timer from "../../components/Timer";
import { useHistory, useParams } from "react-router-dom";

export default function Quiz() {
  const [activeStep, setActiveStep] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [responses, setResposnses] = useState({});
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const { id } = useParams();

  const steps = questions.map((q) => q.title);

  useEffect(() => {
    api
      .get("/active_question")
      .then(({ data }) => {
        setLoading(false);
        setQuestions(data.question.data);
        let resp = {};
        data.question.data.map((q) => (resp[q.title] = ""));
        setResposnses(resp);
      })
      .catch(({ response }) => {
        setLoading(false);
        // handle error here
        console.log("something went wrong", response);
      });
  }, []);

  const updateQuizStatus = () => {
    api
      .post("/complete_quiz", {
        quiz_id: id,
        response: responses,
      })
      .then(() => {
        history.push("/");
      })
      .catch(({ response }) => {
        setLoading(false);
        // handle error here
        console.log("something went wrong", response);
      });
  };

  useEffect(() => {
    if (activeStep === steps.length && steps.length !== 0) {
      updateQuizStatus();
    }
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (loading) {
    return <div>LOADING</div>;
  }

  return (
    <Grid>
      <UserNavBar />
      <main style={{ height: "calc(100vh - 230px)" }}>
        <Timer quizEnded={false} />
        <Box sx={{ width: "100%", padding: "50px" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
            </React.Fragment>
          ) : (
            <Grid style={{ marginTop: "60px" }}>
              <Typography sx={{ mt: 2, mb: 1 }}>
                {questions[activeStep].title}
              </Typography>
              <Grid style={{ width: "100%" }}>
                <TextField
                  id="fullWidth"
                  label="Enter Answer Here"
                  multiline
                  rows={4}
                  variant="standard"
                  style={{ width: "100%" }}
                  value={responses[questions[activeStep].title]}
                  onChange={(e) => {
                    let resp = { ...responses };
                    resp[questions[activeStep].title] = e.target.value;
                    setResposnses(resp);
                  }}
                />
              </Grid>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </Grid>
          )}
        </Box>
      </main>
      <Footer />
    </Grid>
  );
}

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import api from "../../api/axios";
import MUIDataTable from "mui-datatables";

export function DataRender({ value }) {
  return <p>{value}</p>;
}

export default function AdminDashboard() {
  const [quizzesData, setQuizzesData] = useState([]);

  const columns = [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "time_taken",
      label: "Time taken",
    },
    {
      name: "data",
      label: "Data",
      options: {
        customBodyRender: (value, tableMeta) =>
          function dataRender() {
            return <DataRender value={value} tableMeta={tableMeta} />;
          },
      },
    },
  ];

  useEffect(() => {
    // will only fetch the quizzes which have been completed
    api
      .get("/completed_quizzes")
      .then(({ data }) => {
        setQuizzesData(data.data);
      })
      .catch(({ response }) => {
        // handle error here
        console.log("something went wrong", response);
      });
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container>
        <MUIDataTable
          title={"Quiz data"}
          data={quizzesData}
          columns={columns}
          options={{}}
        />
      </Container>
    </Box>
  );
}

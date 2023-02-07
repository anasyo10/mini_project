import React, { useContext } from "react";
import Grid from "@mui/material/Grid";

import UserNavBar from "../../components/UserNavBar";
import Footer from "../../components/Footer";
import UserDashboard from "../../components/UserDashboard";
import AdminDashboard from "../../components/AdminDashboard";
import { AuthContext } from "../../contexts/AuthContext";

export default function Dashboard() {
  const { currentUser } = useContext(AuthContext);
  return (
    <Grid>
      <UserNavBar />
      <main style={{ height: "calc(100vh - 230px)" }}>
        {currentUser.role === "admin" ? <AdminDashboard /> : <UserDashboard />}
      </main>
      <Footer />
    </Grid>
  );
}

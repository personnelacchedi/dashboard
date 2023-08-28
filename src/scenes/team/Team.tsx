import {  Box, Typography, useTheme,Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockDataTeam } from "../../data/MockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useEffect,useState } from "react";
import axios from "axios";


import { Link } from "react-router-dom";
import "./Team.css";



const Team = () => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "AdminID", headerName: "ID",type:"number" },
    {
      field: "Username",
      headerName: "Username",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Password",
      headerName: "Password",
      
      headerAlign: "left",
      align: "left",
    },
    
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
    },
    {
    field:"Profession",
    headerName:"Profession",
    flex:1,
    },
    {
      field: "Phone_Number",
      headerName: "Phone Number",
      flex: 1,
      type:"number"
      
    },
    
   
    
  ];
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API here using axios
    axios
      .get("http://localhost:3000/api/admins")
      .then((response) => setTeamData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Link to="/form" style={{ textDecoration: "none" }} >
        <Button variant="contained" color="primary" id="b1">
          + Add User 
        </Button>
      </Link>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={teamData} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;

import { useState } from "react";
import Header from "../../components/Header";
import { Box, useTheme, Button, Menu, MenuItem } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../Theme";
import { mockDataQuest } from "../../data/MockData";
import { Link } from "react-router-dom";

const Quiz = () => {
    const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleMenuClick = (event, quiz) => {
    setAnchorEl(event.currentTarget);
    setSelectedQuiz(quiz);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedQuiz(null);
  };

  const handleModifyQuiz = () => {
    // Logic to modify the selected quiz
    handleMenuClose();
  };

  const handleDeleteQuiz = () => {
    // Logic to delete the selected quiz
    handleMenuClose();
  };

 
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "quest",
      headerName: "Question",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
        field: "answers",
        headerName: "answers",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "correct",
        headerName: "correct",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      {
        field: "actions",
        headerName: "Actions",
        flex: 1,
        renderCell: (params) => (
          <Button
            
            variant="outlined"
            size="small"
            onClick={(event) => handleMenuClick(event, params.row)}
          >
            Manage Quiz
          </Button>
        ),
      },
    
    
   
  ];
  return (
   <Box m={"20px"}>
    
      
  <Header title="Quiz" subtitle="Simple quiz " />
  <Link to="/quiz1" style={{ textDecoration: "none" }} >
        <Button variant="contained" color="primary" >
         Add Quiz
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
      <DataGrid checkboxSelection rows={mockDataQuest} columns={columns} />
    </Box>

    <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        
      >
        
        <MenuItem onClick={handleModifyQuiz}>Modify Quiz</MenuItem>
        <MenuItem onClick={handleDeleteQuiz}>Delete Quiz</MenuItem>
      </Menu>

  </Box>


)
  
}

export default Quiz
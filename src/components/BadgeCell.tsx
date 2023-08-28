import  { useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { mockDataInvoices } from "../data/MockData";
const badgesOptions = ["Newbie", "Pupil", "Master"];


const BadgeCell = ({ params }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleBadgeClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleBadgeClose = (badge) => {
    setAnchorEl(null);
    // Update the "badges" field for the corresponding row
    const updatedRow = { ...params.row, badges: badge };
    // Update the row in the data list (mockDataInvoices)
    const updatedData = mockDataInvoices.map((row) =>
      row.id === params.row.id ? updatedRow : row
    );
    // Save the updated data back to mockDataInvoices
    // You might want to use state management like Redux or React Context to manage data across components.
  };

  return (
    <>
      <Button onClick={handleBadgeClick} color="success">Select Badge</Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleBadgeClose("")}>
        {badgesOptions.map((badge) => (
          <MenuItem key={badge} onClick={() => handleBadgeClose(badge)}>
            {badge}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
export default BadgeCell

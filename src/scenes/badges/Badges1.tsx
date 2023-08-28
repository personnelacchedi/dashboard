import { Box } from "@mui/material";

import {  Badge, IconButton, Tooltip, useTheme } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

const Badges1 = ({ onAdd, onRemove }) => {
  const theme = useTheme();
  const colors = {
    add: theme.palette.success.main,
    remove: theme.palette.error.main,
  };
  return (
    <Box m={"20px"}>
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
      
      <Box display="flex" alignItems="center">
      <Tooltip title="Add Badge">
        <IconButton onClick={onAdd}>
          <Badge color="default" badgeContent={<PersonAddIcon sx={{ color: colors.add }} />}>
            <PersonAddIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Tooltip title="Remove Badge">
        <IconButton onClick={onRemove}>
          <Badge color="default" badgeContent={<PersonRemoveIcon sx={{ color: colors.remove }} />}>
            <PersonRemoveIcon />
          </Badge>
        </IconButton>
      </Tooltip>
    </Box>

     

    </Box>

  </Box>
  )
}

export default Badges1
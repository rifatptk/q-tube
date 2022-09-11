import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { logo } from "../utils/constants";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#222",
      top: "0",
      gap: 5,
    }}
  >
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center", color: "white" }}
    >
      <img src={logo} alt="q-tube" height={45} />
      <Typography variant="h5" sx={{ ml: 2 }}>
        Q-tube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

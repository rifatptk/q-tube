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
      background: "#000",
      top: "0",
      justifyContent: "space-between",
      borderBottom: "1px solid gray",
    }}
  >
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center", color: "white" }}
    >
      <img src={logo} alt="q-tube" height={45} />
      <Typography sx={{ ml: 2, fontWeight: "bold" }}>Q-tube</Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

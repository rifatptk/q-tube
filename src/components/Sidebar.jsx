import { Stack, Typography } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setselectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        position: "relative",
        bottom: 0,
        zIndex: 1,
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setselectedCategory(category.name)}
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#fc1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}
          >
            {category.name}
          </span>
        </button>
      ))}
      <Typography
        className="copyright"
        variant="body2"
        sx={{ mt: 1.5, color: "#fff" }}
      >
        Copyright 2022 Q-tube
      </Typography>
    </Stack>
  );
};

export default Sidebar;

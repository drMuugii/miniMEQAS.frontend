import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function MuiRating() {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });

  function handleChange(
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) {
    setValue(newValue);
  }

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Stack>
  );
}

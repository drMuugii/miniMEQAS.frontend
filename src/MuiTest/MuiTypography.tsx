import { Typography } from "@mui/material";

export default function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">
        <h1>Lorem ipsum dolor</h1>
      </Typography>
      <Typography variant="h2">
        <h2>Lorem ipsum dolor</h2>
      </Typography>
      <Typography variant="h3" component="h1" gutterBottom>
        <h3>Lorem ipsum</h3>
      </Typography>
      <Typography variant="h4">
        <h4>Lorem ipsum dolor</h4>
      </Typography>
      <Typography variant="h5">
        <h5>Lorem ipsum dolor</h5>
      </Typography>
      <Typography variant="h6">
        <h6>Lorem ipsum dolor</h6>
      </Typography>

      <Typography variant="subtitle1">
        <h6>Sub title 1</h6>
      </Typography>
      <Typography variant="subtitle2">
        <h6>Sub title 2</h6>
      </Typography>

      <Typography variant="body1">
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          repudiandae perspiciatis fugit atque recusandae suscipit illum
          voluptas tempora aliquam sed, iure voluptatum, dolorem inventore
          labore eaque totam! Explicabo, porro nisi.
        </h6>
      </Typography>
      <Typography variant="body2">
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque vitae
          nam voluptates pariatur sed eius incidunt earum sequi! Atque beatae
          soluta id sed recusandae commodi illum necessitatibus nulla quos nisi?
        </h6>
      </Typography>
    </div>
  );
}

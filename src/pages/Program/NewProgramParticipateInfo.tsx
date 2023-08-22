import * as React from "react";
import { Button, IconButton, Typography, TextField, Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useNavigate } from "react-router-dom";

export default function NewProgramParticipateInfo() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Typography variant="h6" gutterBottom>
            Эмнэлэг, лабораторийн нэр
          </Typography>
          <TextField
            id="hospital"
            name="name"
            label="Оролцогчын нэр function бичих"
            variant="filled"
            fullWidth
            inputProps={{ readOnly: true }}
            margin="none"
            size="medium"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            ID
          </Typography>
          <TextField
            id="id"
            name="id"
            label="Оролцогчын ID function бичих"
            variant="filled"
            fullWidth
            inputProps={{ readOnly: true }}
            margin="none"
            size="small"
          />
          <IconButton aria-label="" onClick={() => alert("/home")}></IconButton>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Аппарат үйлдвэрлэгчийн нэр
          </Typography>
          <TextField
            id="brand"
            name="brand"
            label="Оролцогчын Аппарат function бичих"
            variant="standard"
            fullWidth
            inputProps={{ readOnly: true }}
            margin="none"
            size="small"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Аппаратны загвар
          </Typography>
          <TextField
            id="model"
            name="model"
            label="Оролцогчын Аппарат function бичих"
            variant="standard"
            fullWidth
            inputProps={{ readOnly: true }}
            margin="none"
            size="small"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Ашигласан жил
          </Typography>
          <TextField
            id="year"
            name="year"
            label="Ашигласан жил"
            variant="standard"
            type="number"
            fullWidth
            required
            margin="none"
            size="small"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Сорьц хүлээн авсан огноо
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="сар/өдөр/он" sx={{ width: "450px" }} />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Сорьц шинжилсэн огноо
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="сар/өдөр/он" sx={{ width: "450px" }} />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Шинжилсэн ажилтны нэр
          </Typography>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            variant="standard"
            fullWidth
            margin="none"
            size="small"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Хариуцах ажилтны утасны дугаар
          </Typography>
          <TextField
            id="phone"
            name="phone"
            label="Утасны дугаар"
            type="number"
            fullWidth
            required
            variant="standard"
            margin="none"
            size="small"
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Email
          </Typography>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            variant="standard"
            margin="none"
            size="small"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          size="large"
          fullWidth
          variant="contained"
          color="success"
          sx={{ marginTop: "20px" }}
          onClick={() => navigate("/NewProgram")}
        >
          үргэлжлүүлэх
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          size="large"
          fullWidth
          variant="contained"
          color="warning"
          sx={{ marginTop: "20px" }}
          onClick={() => navigate("/NewProgram")}
        >
          засах
        </Button>
      </Grid>
    </React.Fragment>
  );
}

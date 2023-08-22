import {
  Box,
  Paper,
  Button,
  Stack,
  Typography,
  CardContent,
  CardActions,
  Card,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProgramChoose() {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        marginTop: "100px",
        p: 2,
        display: "flex",
        flexDirection: "row",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        justifyContent: "center",
      }}
      elevation={0}
    >
      <Stack direction={"row"} spacing={6}>
        <Box
          sx={{
            width: {
              xs: 100, // дэлгэц 0 px их үед width нь 100px
              sm: 200, // дэлгэц 600 px их үед width нь 200px

              md: 300, // дэлгэц 900 px их үед width нь 300px
            },
          }}
        >
          <Card>
            <CardMedia
              component={"img"}
              height={"140"}
              image="http://source.unsplash.com/random"
              alt="unsplash image"
            />
            <CardContent sx={{ height: "100px", sm: 200 }}>
              <Typography variant="h5" textAlign={"center"}>
                Одоо явагдаж байгаа хөтөлбөр
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate("/ProgramNewList")}
                sx={{
                  width: {
                    xs: 100, // дэлгэц 0 px их үед width нь 100px
                    sm: 200, // дэлгэц 600 px их үед width нь 200px

                    md: 300, // дэлгэц 900 px их үед width нь 300px
                  },
                }}
              >
                дэлгэрэнгүй
              </Button>
            </CardActions>
          </Card>
        </Box>

        <Box
          sx={{
            width: {
              xs: 100, // дэлгэц 0 px их үед width нь 100px
              sm: 200, // дэлгэц 600 px их үед width нь 200px

              md: 300, // дэлгэц 900 px их үед width нь 300px
            },
          }}
        >
          <Card>
            <CardMedia
              component={"img"}
              height={"140"}
              image="http://source.unsplash.com/random"
              alt="unsplash image"
            />
            <CardContent sx={{ height: "100px" }}>
              <Typography variant="h5" textAlign={"center"}>
                Өмнөх хөтөлбөрүүд
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="success"
                size="large"
                onClick={() => navigate("/ProgramHistoryList")}
                sx={{
                  width: {
                    xs: 100, // дэлгэц 0 px их үед width нь 100px
                    sm: 200, // дэлгэц 600 px их үед width нь 200px

                    md: 300, // дэлгэц 900 px их үед width нь 300px
                  },
                }}
              >
                дэлгэрэнгүй
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box
          sx={{
            width: {
              xs: 100, // дэлгэц 0 px их үед width нь 100px
              sm: 200, // дэлгэц 600 px их үед width нь 200px
              md: 300,
              // дэлгэц 900 px их үед width нь 300px
            },
          }}
        >
          <Card>
            <CardMedia
              component={"img"}
              height={"140"}
              image="http://source.unsplash.com/random"
              alt="unsplash image"
            />
            <CardContent sx={{ height: "100px" }}>
              <Typography variant="h5" textAlign={"center"}>
                Сертификат
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="info"
                size="large"
                onClick={() => navigate("/ProgramCertificate")}
                sx={{
                  width: {
                    xs: 100, // дэлгэц 0 px их үед width нь 100px
                    sm: 200, // дэлгэц 600 px их үед width нь 200px
                    md: 300,
                    // дэлгэц 900 px их үед width нь 300px
                  },
                }}
              >
                дэлгэрэнгүй
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Stack>
    </Paper>
  );
}

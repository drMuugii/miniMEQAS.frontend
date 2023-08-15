import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export default function MuiCard() {
  return (
    <Box width={"300px"}>
      <Card>
        <CardMedia
          component={"img"}
          height={"140"}
          image="http://source.unsplash.com/random"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            React
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            sunt sequi natus iste necessitatibus vitae reprehenderit. Adipisci,
            quis rem veritatis consequatur amet praesentium earum est expedita
            esse quaerat similique numquam.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"> SHARE</Button>
          <Button size="small">LEARN MORE</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
